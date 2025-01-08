export default defineNuxtConfig({
  // config favicon
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  // ssr: true,
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
    "@vueuse/motion/nuxt",
  ],
});
