/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@nest-next/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
