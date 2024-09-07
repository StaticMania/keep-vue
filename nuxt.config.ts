export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/main.css"],
  //adding font through next plugIn
  googleFonts: {
    display: "swap",
    families: {
      Inter: {
        wght: "100..900",
      },
    },
  },
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
  build: {
    transpile: ["vue-sonner"],
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "radix-vue/nuxt",
    "@vueuse/nuxt",
  ],
});
