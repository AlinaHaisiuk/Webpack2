module.exports = {
  ignores: ["node_modules/**"],
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      window: "readonly",
      document: "readonly",
      console: "readonly",
      alert: "readonly",
      Image: "readonly",
    },
    env: {
      browser: true,
      node: true,
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "sort-keys": "warn",
    "no-undef": "error",
    "no-useless-escape": "error",
  },
};
