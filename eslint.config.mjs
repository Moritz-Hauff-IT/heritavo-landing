import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored, minifiziert (jszip).
    "public/**",
  ]),
  {
    rules: {
      // Wie in der App: Effekte, die beim Mount aus Browser-APIs
      // (matchMedia, IntersectionObserver) State ableiten, sind hier gewollt.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
