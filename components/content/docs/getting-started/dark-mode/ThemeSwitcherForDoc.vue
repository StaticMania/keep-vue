<script lang="ts" setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <ClientOnly>
    <Button
      class="rounded-lg bg-primary-25 p-2.5 hover:bg-primary-50 dark:bg-metal-600 dark:hover:bg-metal-700"
      @click="() => toggleTheme()">
      <PhosphorIconMoon
        v-if="colorMode.preference === 'dark'"
        :size="21"
        class="transition duration-300 ease-in-out" />
      <PhosphorIconSunDim
        v-else
        color="black"
        :size="21"
        class="transition duration-300 ease-in-out" />
    </Button>
  </ClientOnly>
</template>
