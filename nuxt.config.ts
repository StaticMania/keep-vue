export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ["~/styles/main.css"],
  //adding font through next plugIn
  googleFonts: {
    display: "swap",
    families: {
      Inter: {
        wght: "100..900",
      },
      // SpaceMono: {
      //   subsets: "latin",
      //   wght: ["400"],
      // },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    documentDriven: true,
  },
  shiki: {
    bundledThemes: ["night-owl"],
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
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
    "nuxt-shiki",
    "@nuxtjs/color-mode",
    "nuxt-phosphor-icons",
  ],
});
