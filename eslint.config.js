module.exports = [
  {
    ignores: ["_site/**", "node_modules/**", "dist/**", ".nuxt/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        console: "readonly",
        window: "readonly",
        document: "readonly",
        customElements: "readonly",
        HTMLElement: "readonly",
      }
    },
    rules: {}
  }
];
