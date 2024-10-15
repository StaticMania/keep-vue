//vue
const vueInstall = {
  npm: `npm create vite@latest my-project -- --template vue\ncd my-project`,
  yarn: "yarn create vue@latest",
};

const twForVue = {
  "install-tailwindCSS": `npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`,
};

const installKeepVue = {
  npm: "npm i keep-vue @phosphor-icons/vue",
  yarn: "yarn add keep-vue @phosphor-icons/vue",
  pnpm: "pnpm add keep-vue @phosphor-icons/vue",
};

const addTwCssForVue = {
  "src/main.css": `@import "keep-vue/css";
@tailwind base;
@tailwind components;
@tailwind utilities;`,
};

const twConfigForVue = {
  "tailwind.config.js": `
  import { keepTheme } from "keep-vue/keepTheme";
const config = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
      extend: {}
    },
    plugins: []
  }
export default keepTheme(config);
  `,
  "tailwind.config.ts": `
  import type { Config } from 'tailwindcss'
  import { keepTheme } from "keep-vue/keepTheme";
const config : Config = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
      extend: {}
    },
    plugins: []
  }
export default keepTheme(config);
  `,
};

const ImportKeepVue = {
  "src/App.vue": `<script setup>
 import { Button } from "keep-vue";
</script>

<template>
  <Button>Keep React</Button>
</template>`,
};

//nuxt
const NuxtInstall = {
  npm: `npx nuxi@latest init <project-name>`,
  yarn: `yarn dlx nuxi@latest init <project-name>`,
  pnpm: `pnpm dlx nuxi@latest init <project-name>`,
};

const twForNuxt = {
  nuxi: `npx nuxi@latest module add tailwindcss\nnpx tailwindcss init`,
  yarn: `yarn add -D @nuxtjs/tailwindcss\nnpx tailwindcss init`,
  npm: `npm install -D @nuxtjs/tailwindcss\nnpx tailwindcss init`,
};

const installKeepVueForNuxt = {
  npm: `npm i keep-vue\nnpm install --save-dev nuxt-phosphor-icons `,
  yarn: `yarn add keep-vue\nyarn add --dev nuxt-phosphor-icons`,
  pnpm: "pnpm add keep-vue\npnpm add -D nuxt-phosphor-icons",
};

const phIconNuxt = {
  "nuxt.config.ts": `export default defineNuxtConfig({ modules: [
  //rest module...
    "nuxt-phosphor-icons",
  ],`,
};

const addTwCssForNuxt = {
  "style/main.css": `@import "keep-vue/css";
@tailwind base;
@tailwind components;
@tailwind utilities;`,
};

const twConfigForNuxt = {
  "tailwind.config.js": `
  import { keepTheme } from "keep-vue/keepTheme";
module.exports = keepTheme({
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});`,
  "tailwind.config.ts": `
import { keepTheme } from "keep-vue/keepTheme";
import type { Config } from "tailwindcss";

const config: Config = keepTheme({
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
export default config;`,
};

const ImportKeepNuxt = {
  "App.vue": `<script setup>
 import { Button } from "keep-vue";
</script>

<template>
  <Button>Keep React</Button>
</template>`,
};
export {
  ImportKeepNuxt,
  ImportKeepVue,
  NuxtInstall,
  addTwCssForNuxt,
  addTwCssForVue,
  installKeepVue,
  installKeepVueForNuxt,
  phIconNuxt,
  twConfigForNuxt,
  twConfigForVue,
  twForNuxt,
  twForVue,
  vueInstall,
};
