const siteUrl = "https://www.advancedjavascript.org";
const siteName = "Advanced JavaScript";
const siteDescription =
  "JavaScript interview snippets and job-task examples for mastering async code, arrays, React, data structures, and core language behavior.";

function getAbsoluteUrl(pathname) {
  return new URL(pathname, siteUrl).toString();
}

function getJson(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getJson(data) }}
    />
  );
}

export function WebSiteStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        inLanguage: "en",
      }}
    />
  );
}

export function BreadcrumbStructuredData({ pathname, title }) {
  if (pathname === "/") {
    return null;
  }

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: getAbsoluteUrl(pathname),
          },
        ],
      }}
    />
  );
}
