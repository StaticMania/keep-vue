<script lang="ts" setup>
import DocSidebar from "~/components/DocSidebar.vue";
import TableOfContent from "~/components/TableOfContent.vue";
import { ToastWrapper } from "~/src";

const colorMode = useColorMode();
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <ToastWrapper
    :theme="colorMode.value === 'dark' ? 'dark' : 'light'"
    :toast-options="{
      classes: {
        title: 'text-body-3 font-medium',
        toast: 'rounded-xl shadow-large',
        description: 'text-body-4 font-normal',
      },
    }" />

  <HeaderComponent />
  <main class="relative pt-20">
    <!-- upper area -> docs layout  -->
    <div
      class="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20 dark:bg-[#0d1015]" />
    <div class="docs-page" />
    <!-- docs layout container  -->
    <div
      class="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
      <!-- left side bar  -> docs layout  -->
      <DocSidebar />
      <!-- main section of the layout  -->
      <div class="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
        <!-- for showing dynamic content  -->
        <div id="linkPage" class="overflow-y-auto">
          <slot />
        </div>
      </div>
      <!-- table of content  -->
      <TableOfContent />
    </div>
  </main>
</template>
