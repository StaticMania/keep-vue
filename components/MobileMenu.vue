<script lang="ts" setup>
import SearchBar from "./SearchBar.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
const route = useRoute();

const routeValue = computed(() => {
  return route.path;
});

const active = ref(false);

const showDrawer = ref(false);

const setShowDrawer = (value: boolean): void => {
  showDrawer.value = value;
};

const isOpen = ref(false);
const seIsOpen = (value: boolean): void => {
  isOpen.value = value;
};

watchTriggerable(routeValue, () => {
  active.value = false;
  isOpen.value = false;
  showDrawer.value = false;
});

const isActive = (str: string): boolean => {
  const lastPart = route.path.toLocaleLowerCase().split("/").pop();
  const strPart = str.toLocaleLowerCase().split("/").pop();
  return lastPart === strPart;
};
</script>

<template>
  <div class="flex items-center justify-between gap-1.5 sm:gap-3 laptop:hidden">
    <!-- search bar for laptop  -->
    <button
      class="hidden w-[250px] items-center justify-between rounded-lg bg-primary-25 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-primary-50 sm:flex"
      @click="isOpen = true">
      <span
        class="flex items-center gap-2 text-body-4 font-normal text-metal-400">
        <PhosphorIconMagnifyingGlass :size="20" />
        <span>Search component...</span>
      </span>
      <span class="flex items-center text-body-4 font-normal text-metal-400">
        <PhosphorIconCommand :size="20" />
        K
      </span>
    </button>

    <!-- search bar for mobile  -->
    <button
      class="flex rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 sm:hidden dark:text-metal-900"
      @click="isOpen = true">
      <PhosphorIconMagnifyingGlass class="size-5" />
    </button>

    <NuxtLink
      href="https://github.com/StaticMania/keep-vue"
      target="_blank"
      class="hidden rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 sm:block">
      <NuxtImg
        src="/images/icon/github.svg"
        :height="20"
        :width="20"
        alt="github" />
    </NuxtLink>
    <NuxtLink
      href="https://discord.gg/xTf6w2nm9Z"
      target="_blank"
      class="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50">
      <NuxtImg
        src="/images/icon/discord.svg"
        :height="20"
        :width="20"
        alt="github" />
    </NuxtLink>
    <ThemeSwitcher />

    <!-- drawer  -->
    <MobileMenuDrawer
      :is-active="isActive"
      :is-open="showDrawer"
      :set-is-open="setShowDrawer" />
  </div>
  <SearchBar :is-open="isOpen" :set-is-open="seIsOpen" />
</template>
