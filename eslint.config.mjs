import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescipt", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "react/no-escape-entities": "off",
    },
  }),
];

export default eslintConfig;
