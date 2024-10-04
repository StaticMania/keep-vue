//vue
const vueInstall = {
  npm: `npm create vite@latest my-project -- --template vue\ncd my-project`,
  yarn: "yarn create vue@latest",
};

const twForVue = {
  "install-tailwindCSS": `npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`,
};

const installKeepVue = {
  npm: "npm i keep-vue phosphor-vue",
  yarn: "yarn add keep-vue phosphor-vue",
  pnpm: "pnpm add keep-vue phosphor-vue",
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

export {
  ImportKeepVue,
  addTwCssForVue,
  installKeepVue,
  twConfigForVue,
  twForVue,
  vueInstall,
};
