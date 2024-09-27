<script lang="ts" setup>
import { PhMoon, PhSunDim } from "@phosphor-icons/vue";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <Button
    class="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 dark:bg-metal-600 dark:hover:bg-metal-700"
    @click="() => toggleTheme()">
    <PhSunDim v-if="colorMode.preference === 'dark'" :size="21" />
    <PhMoon v-else color="black" :size="21" />
  </Button>
</template>
