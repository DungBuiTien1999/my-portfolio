/** @type {import('next').NextConfig} */
const path = require("path");
// const pathMap = require("./pathMap");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

if (process.env.NEXT_APP_ENV) {
  require("dotenv").config({
    path: path.resolve(process.cwd(), ".env." + process.env.NEXT_APP_ENV),
  });
} else {
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });
}

module.exports = withBundleAnalyzer({
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webm|mp4)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000",
          },
        ],
      },
    ];
  },
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    prependData: `@import "@styles/base.module";@import '@styles/common.mixin';`,
  },
  images: {
    loader: "custom",
  },
  // exportPathMap: function () {
  //   return pathMap;
  // },
  generateBuildId: async () => {
    return new Date().toISOString();
  },
  env: {
    emailServiceId: process.env.EMAIL_SERVICE_ID,
    emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
    emailPublicKey: process.env.EMAIL_PUBLIC_KEY,
  },
  serverRuntimeConfig: {},
});
