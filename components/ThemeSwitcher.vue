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
      class="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 dark:bg-metal-600 dark:hover:bg-metal-700"
      @click="() => toggleTheme()">
      <PhosphorIconMoon v-if="colorMode.preference === 'dark'" :size="21" />
      <PhosphorIconSunDim v-else color="black" :size="21" />
    </Button>
  </ClientOnly>
</template>
