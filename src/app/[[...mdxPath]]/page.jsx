import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import { BreadcrumbStructuredData } from "../structured-data";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

const siteName = "Advanced JavaScript";
const defaultDescription =
  "JavaScript interview snippets and job-task examples for mastering async code, arrays, React, data structures, and core language behavior.";

function getPathname(mdxPath) {
  const segments = Array.isArray(mdxPath) ? mdxPath : [];
  return `/${segments.join("/")}`;
}

export async function generateMetadata(props) {
  const params = await props.params;

  const { metadata } = await importPage(params.mdxPath);

  const pathname = getPathname(params.mdxPath);
  const isHomePage = pathname === "/";
  const title = metadata.title ?? siteName;
  const description = metadata.description ?? defaultDescription;

  return {
    ...metadata,
    title,
    description,
    robots:
      pathname === "/get-started"
        ? { ...metadata.robots, index: false, follow: true }
        : metadata.robots,
    alternates: {
      ...metadata.alternates,
      canonical: pathname,
    },
    openGraph: {
      ...metadata.openGraph,
      title,
      description,
      url: pathname,
      siteName,
      type: isHomePage ? "website" : "article",
      images: [
        {
          url: "/opengraph-image.png",
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;

  const result = await importPage(params.mdxPath);

  const { default: MDXContent, toc, metadata } = result;
  const pathname = getPathname(params.mdxPath);
  const title = metadata.title ?? siteName;

  return (
    <>
      <BreadcrumbStructuredData pathname={pathname} title={title} />
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    </>
  );
}
