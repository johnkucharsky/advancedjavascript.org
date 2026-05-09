/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.advancedjavascript.org",
  generateRobotsTxt: true,
  autoLastmod: false,
  exclude: [
    "/apple-icon.png",
    "/get-started",
    "/icon.png",
    "/opengraph-image.png",
  ],
  sitemapSize: 7000,
  transform: async (config, path) => {
    const highValuePages = new Set([
      "/js-native/map-ds",
      "/js-native/mutating-methods",
      "/js-native/promises",
      "/js-native/read-only-methods",
      "/js-native/set-and-object",
      "/js-native/transform-methods",
      "/learn-js-and-mdn/event-loop",
      "/react/rendering",
    ]);

    const priority = path === "/" ? 1 : highValuePages.has(path) ? 0.8 : 0.6;

    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority,
    };
  },
};
