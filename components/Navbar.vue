<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DesktopMenu from "./DesktopMenu.vue";

const router = useRoute();
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-metal-100 bg-white"
    :class="router.path === '/' ? 'dark:bg-[#0D1015]' : 'dark:bg-metal-900'">
    <div class="relative mx-auto max-w-7xl px-6 2xl:px-0">
      <nav class="flex items-center justify-between py-4">
        <DesktopMenu />
        <MobileMenu />
      </nav>
    </div>
  </header>
</template>
