import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    "no-console": "off",
    "vue/html-self-closing": "off",
  },
});
