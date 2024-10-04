const nuxtColorModeInstall = {
  npm: "npm i @nuxtjs/color-mode",
};

const NuxtModuleAddCode = {
  "nuxt.config.ts": `
    modules: [
  //rest modules
    "@nuxtjs/color-mode",
  ],`,
};

const nuxtConfigColorCode = {
  "nuxt.config.ts": ` export default defineNuxtConfig({
  //rest config
   colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  })`,
};

const nuxtThemeSwitcherCode = {
  "ThemeSwitcher.vue": `<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

</script>

<template>
    <Button
      class="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 dark:bg-metal-600 dark:hover:bg-metal-700"
      @click="() => toggleTheme()">
      <PhosphorIconMoon v-if="colorMode.preference === 'dark'" :size="21" />
      <PhosphorIconSunDim v-else color="black" :size="21" />
    </Button>
</template>
`,
};

export {
  NuxtModuleAddCode,
  nuxtColorModeInstall,
  nuxtConfigColorCode,
  nuxtThemeSwitcherCode,
};
