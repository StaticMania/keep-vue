export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/src/components",
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image"],
});