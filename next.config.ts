import type { NextConfig } from "next";
// next.config.js (top of file)
if (process.env.NODE_ENV === "development") {
  try {
    if (
      typeof globalThis.localStorage === "undefined" ||
      typeof globalThis.localStorage.getItem !== "function"
    ) {
      globalThis.localStorage = {
        length: 0,
        getItem(key) {
          // print a clear stacktrace so we know who called it
          console.error("=== server localStorage.getItem() called ===", key);
          console.error(new Error().stack);
          return null;
        },
        setItem() { },
        removeItem() { },
        clear() { },
        key() {
          return null;
        },
      };
    }
  } catch (e) {
    // if this file is parsed in some exotic environment, fail silently
    console.error("localStorage shim error", e);
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
