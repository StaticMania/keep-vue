<script lang="ts" setup>
import ToastWrapper from "~/src/components/Toast/ToastWrapper.vue";
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <ToastWrapper
    :toast-options="{
      classes: {
        toast:
          'dark:!bg-metal-900 border dark:!border-metal-800 !border-white !bg-white',
        title: 'text-metal-900 dark:!text-white',
        description: 'dark:!text-metal-300 text-metal-600',
        actionButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        cancelButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        closeButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
        error: '!text-error-500',
        success: '!text-success-500',
        warning: '!text-warning-500',
        info: '!text-primary-500',
      },
    }" />

  <Navbar />
  <main class="relative pt-20">
    <div
      class="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20"></div>
    <div class="docs-page"></div>
    <div
      class="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
      <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
        <aside
          id="componentListSidebar"
          class="sticky top-28 h-[75vh] space-y-5 overflow-auto 2xl:top-56 2xl:py-6 2xl:pl-8">
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/docs/components/accordion">Accordion</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/alert">Alert</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/areaChart">Area Chart</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/barChart">Bar Chart</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/lineChart">Line Chart</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/pieChart">Pie Chart</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/avatar">Avatar</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/badge">Badge</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/breadcrumb">Breadcrumb</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/button">Button</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/buttonGroup">
                Button Group
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/card">Card</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/carousel">Carousel</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/checkbox">CheckBox</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/divider">Divider</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/datePicker">DatePicker</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/dropdown">Dropdown</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/drawer">Drawer</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/empty">Empty</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/modal">Modal</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/navbar">Navbar</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/notification">
                Notification
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/numberInput">
                Number Input
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/progress">Progress</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/pagination">Pagination</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/popover">Popover</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/radio">Radio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/rating">Rating</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/sidebar">Sidebar</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/skeleton">Skeleton</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/slider">Slider</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/spinner">Spinner</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/steps">Steps</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/switch">Switch</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/table">Table</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/tabs">Tabs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/tag">Tag</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/textArea">TextArea</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/toast">Toast</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/input">Input</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/timeLine">TimeLine</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/tooltip">Tooltip</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/upload">Upload</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
      <div class="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
        <div id="linkPage" class="overflow-y-auto">
          <slot />
        </div>
      </div>
      <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
        Table Of Contents
      </div>
    </div>
  </main>
</template>
