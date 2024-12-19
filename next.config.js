/** @type {import('next').NextConfig} */
const { name } = require("./package.json");

const isProd = process.env.NODE_ENV === "production";
console.log("isProd", isProd);
// const basePath = isProd ? `/${name}` : "";
const basePath = "";
// const assetPrefix = ``;
const assetPrefix = `${basePath}`;

module.exports = {
  reactStrictMode: true,
  distDir: "dist",
  output: "export",
  assetPrefix,
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./src/util/imageLoader.js",
  },
};
