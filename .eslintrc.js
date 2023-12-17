module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": 2,
    "react/jsx-key": 2,
    "@next/next/no-img-element": 2,
    "react/no-unknown-property": 2,
    "@typescript-eslint/no-extra-semi": 2,
    "@typescript-eslint/no-empty-function": 2,
    "no-empty-pattern": 2,
    "prefer-const": 2,
    "no-constant-condition": 2,
    "no-implicit-coercion": 2,
    "no-case-declarations": 2,
    "react/display-name": 2,
    "@typescript-eslint/no-inferrable-types": 2,
  }
};
