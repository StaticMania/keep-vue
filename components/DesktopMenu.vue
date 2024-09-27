<script lang="ts" setup>
import { PhCommand, PhMagnifyingGlass } from "@phosphor-icons/vue";
import { navbarRoutes } from "~/Routes/routes";
import { buttonVariants } from "~/src/components/Button/buttonTheme";
import { cn } from "~/src/utils/cn";
const route = useRoute();

const isOpen = ref(false);

const setIsOpen = (value: boolean): void => {
  isOpen.value = value;
};
</script>

<template>
  <div class="flex items-center space-x-28">
    <!-- logo  -->
    <NuxtLink href="/" class="flex">
      <NuxtImg
        src="/images/keep.svg"
        alt="Keep Vue"
        :width="130"
        :height="53"
        class="block dark:hidden" />
      <NuxtImg
        src="/images/keep-dark.svg"
        alt="Keep Vue"
        :width="130"
        :height="53"
        class="hidden dark:block" />
    </NuxtLink>

    <div
      class="hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10">
      <NuxtLink
        v-for="nav in navbarRoutes"
        :key="nav?.id"
        :href="nav?.href"
        :target="nav.redirect ? '_blank' : '_self'"
        :class="`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 dark:text-metal-300 dark:active:text-white ${nav.name === 'Documentation' && route.path.includes('/docs/') ? 'text-primary-500 dark:text-white' : ''} ${nav.name === 'Blog' && route.path === '/blog' ? 'text-primary-500 dark:text-white' : ''}`">
        {{ nav.name }}
      </NuxtLink>
    </div>
  </div>
  <div class="hidden items-center gap-3 laptop:flex">
    <!-- search  -->
    <button
      class="flex w-[300px] items-center justify-between rounded-lg border border-metal-100 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-white dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900"
      @click="isOpen = true">
      <span
        class="flex items-center gap-2 text-body-4 font-normal text-metal-300 dark:text-white">
        <PhMagnifyingGlass :size="20" />
        <span>Search component</span>
      </span>
      <span class="flex items-center text-body-4 font-normal text-metal-200">
        <PhCommand :size="20" />
        K
      </span>
    </button>

    <!-- github -->
    <NuxtLink
      href="https://github.com/StaticMania/keep-vue"
      target="_blank"
      class="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
      <NuxtImg
        src="/images/icon/github.svg"
        :height="22"
        :width="22"
        alt="github"
        class="block dark:hidden" />
      <NuxtImg
        src="/images/icon/github-dark.svg"
        :height="22"
        :width="22"
        alt="github"
        class="hidden dark:block" />
    </NuxtLink>

    <!-- discord  -->
    <NuxtLink
      href="https://discord.gg/fSxDJyvJmr"
      target="_blank"
      class="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
      <NuxtImg
        src="/images/icon/discord.svg"
        :height="22"
        :width="22"
        alt="discord" />
    </NuxtLink>
    <ThemeSwitcher />
    <NuxtLink
      href="/docs/getting-started/introduction"
      :class="
        cn(buttonVariants({ size: 'md', color: 'secondary' }), 'capitalize')
      ">
      get started
    </NuxtLink>
  </div>

  <SearchBar :is-open="isOpen" :set-is-open="setIsOpen" />
</template>
