import { assetPrefix } from "../../next.config.js";

function isProtocolLink(url) {
  return new RegExp(/\:\/\//, "gi").test(url);
}

function imageLoader({ src, width }) {
  return `${src}`;
  // return `${!isProtocolLink(src) && !!assetPrefix ? assetPrefix : ""}${src}`;
}

export default imageLoader;
