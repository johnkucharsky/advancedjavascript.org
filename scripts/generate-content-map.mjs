import fs from "node:fs";
import path from "node:path";

const contentRoot = "src/content";
const outputFile = "src/content-map.js";

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filePath) : filePath;
  });
}

function routeFor(filePath) {
  const route = filePath
    .replaceAll("\\", "/")
    .replace(/^src\/content/, "")
    .replace(/\.mdx$/, "");

  return route === "/index" ? "/" : route;
}

function getFrontmatterValue(source, key) {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return "";

  const match = frontmatter[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
}

function cleanText(value) {
  return (value || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shortDescription(value) {
  const text = cleanText(value);
  if (!text) return "";

  const sentences = text.match(/[^.!?]+[.!?]?/g) || [text];
  const description = sentences.slice(0, 2).join(" ").trim();

  if (description.length <= 180) return description;
  return `${description.slice(0, 177).trimEnd()}...`;
}

function titleCase(value) {
  return cleanText(value)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getSnippetTitle(info, heading, index) {
  const filename =
    info.match(/filename="([^"]+)"/)?.[1] ||
    info.match(/filename='([^']+)'/)?.[1];

  return titleCase(filename || heading || `Snippet ${index + 1}`);
}

function nearestHeading(sourceBeforeFence) {
  const headings = [...sourceBeforeFence.matchAll(/^#{2,4}\s+(.+)$/gm)];
  const heading = headings.at(-1);
  return heading
    ? {
        title: cleanText(heading[1]),
        endIndex: heading.index + heading[0].length,
      }
    : { title: "", endIndex: 0 };
}

function proseDescription(sectionBeforeFence) {
  const sourceWithoutFrontmatter = sectionBeforeFence.replace(
    /^---[\s\S]*?---/,
    "",
  );
  const paragraphs = [];
  let current = [];

  for (const line of sourceWithoutFrontmatter.split(/\r?\n/)) {
    const text = line.trim();
    const shouldBreak =
      !text ||
      text.startsWith("#") ||
      text.startsWith("- ") ||
      text.startsWith("|") ||
      text.startsWith("import ") ||
      text.startsWith("export ");

    if (shouldBreak) {
      if (current.length) {
        paragraphs.push(current.join(" "));
        current = [];
      }
      continue;
    }

    current.push(text);
  }

  if (current.length) {
    paragraphs.push(current.join(" "));
  }

  const usefulParagraph =
    paragraphs
      .map(shortDescription)
      .find(
        (paragraph) =>
          paragraph.length >= 40 &&
          !paragraph.endsWith(":") &&
          !/console\.|=>|function\s|const\s|let\s|var\s/.test(paragraph),
      ) || "";

  return usefulParagraph;
}

function fallbackDescription(snippetTitle, pageTitle) {
  return `Covers the ${snippetTitle} snippet from the ${pageTitle} page.`;
}

const files = walk(contentRoot)
  .filter((filePath) => filePath.endsWith(".mdx"))
  .sort((left, right) => routeFor(left).localeCompare(routeFor(right)));

const projectContentMap = {};
let snippetCount = 0;

for (const filePath of files) {
  const source = fs.readFileSync(filePath, "utf8");
  const route = routeFor(filePath);
  const page = {
    title: getFrontmatterValue(source, "title"),
    description: getFrontmatterValue(source, "description"),
    source: filePath.replaceAll("\\", "/"),
    snippets: [],
  };

  const fencePattern = /```([^\r\n]*)\r?\n[\s\S]*?```/g;
  let match;
  let index = 0;

  while ((match = fencePattern.exec(source))) {
    const sourceBeforeFence = source.slice(0, match.index);
    const heading = nearestHeading(sourceBeforeFence);
    const title = getSnippetTitle(match[1] || "", heading.title, index);
    const sectionBeforeFence = source.slice(heading.endIndex, match.index);
    const description =
      proseDescription(sectionBeforeFence) ||
      fallbackDescription(title, page.title);

    page.snippets.push({
      title,
      description,
    });

    index += 1;
    snippetCount += 1;
  }

  projectContentMap[route] = page;
}

const output = `// Generated content map for the Advanced JavaScript MDX corpus.
// Routes are keys; each route lists page metadata and every fenced code snippet.

export const projectContentMap = ${JSON.stringify(projectContentMap, null, 2)};

export const projectContentMapStats = ${JSON.stringify(
  {
    routes: Object.keys(projectContentMap).length,
    snippets: snippetCount,
  },
  null,
  2,
)};
`;

fs.writeFileSync(outputFile, output);

console.log(
  JSON.stringify(
    {
      file: outputFile,
      routes: Object.keys(projectContentMap).length,
      snippets: snippetCount,
    },
    null,
    2,
  ),
);
