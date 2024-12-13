/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@nest-next/eslint-config/nest.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
