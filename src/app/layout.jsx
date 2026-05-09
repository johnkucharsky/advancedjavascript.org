/* eslint-env node */
import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import "nextra-theme-docs/style.css";
import "./global.css";
import Image from "next/image";
import Link from "next/link";
import { WebSiteStructuredData } from "./structured-data";

const defaultDescription =
  "JavaScript interview snippets and job-task examples for mastering async code, arrays, React, data structures, and core language behavior.";

export const metadata = {
  metadataBase: new URL("https://www.advancedjavascript.org"),
  title: {
    default: "Advanced JavaScript",
    template: "%s | Advanced JavaScript",
  },
  description: defaultDescription,
  applicationName: "Advanced JavaScript",
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "Advanced JavaScript",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced JavaScript",
    description: defaultDescription,
    images: ["/opengraph-image.png"],
  },
  openGraph: {
    title: "Advanced JavaScript",
    description: defaultDescription,
    url: "/",
    siteName: "Advanced JavaScript",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Advanced JavaScript Logo",
      },
    ],
    type: "website",
  },
};
export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <div>Advanced JavaScript</div>{" "}
          <div style={{ opacity: "60%", fontSize: "13px" }}>
            Real interview snippets
          </div>
        </div>
      }
      projectLink={"https://github.com/JohnKucharsky/advancedjavascript"}
    >
      <Link
        href="/advanced-javascript.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download={true}
        style={{ display: "flex", flexDirection: "row" }}
      >
        PDF
        <Image
          src={"/download.svg"}
          alt={"download"}
          width={20}
          height={20}
        />{" "}
      </Link>
    </Navbar>
  );

  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Analytics />
      <GoogleAnalytics gaId={"G-KWQLDVETTW"} />
      <GoogleTagManager gtmId={"GTM-P4PTVL7P"} />
      <Head faviconGlyph="✦" />
      <body>
        <WebSiteStructuredData />
        <Layout
          navbar={navbar}
          docsRepositoryBase="https://github.com/JohnKucharsky/advancedjavascript/src"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink={null}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
