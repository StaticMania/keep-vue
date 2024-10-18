<script lang="ts" setup>
import { Button } from "~/src";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <ClientOnly>
    <Button
      class="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900"
      @click="() => toggleTheme()">
      <PhosphorIconMoon
        v-if="colorMode.preference === 'dark'"
        v-motion-slide-top
        :size="21" />
      <PhosphorIconSunDim v-else v-motion-slide-top color="black" :size="21" />
    </Button>
  </ClientOnly>
</template>
