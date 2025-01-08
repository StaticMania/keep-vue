<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <footer class="bg-white shadow-small dark:bg-metal-900">
    <div class="mx-auto max-w-7xl px-6 py-10 2xl:px-0">
      <div
        class="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
        <div>
          <NuxtLink to="/">
            <NuxtImg src="/images/keep.svg" width="130" height="53" />
          </NuxtLink>
          <p
            class="mt-6 max-w-lg text-body-4 font-normal text-metal-600 dark:text-white">
            Keep Vue is an open-source component library built on Tailwind CSS
            and Vue.js. It provides a versatile set of pre-designed UI
            components to build modern web applications.
          </p>
        </div>
        <div>
          <h4
            class="mb-3 text-body-3 font-medium text-metal-900 dark:text-white">
            Resource
          </h4>
          <ul
            class="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-50">
            <li>
              <NuxtLink
                class="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                to="https://github.com/StaticMania/keep-vue"
                target="_blank">
                GitHub
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                to="https://tailwindcss.com"
                target="_blank">
                Tailwind CSS
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1"
                to="https://keepdesign.io"
                target="_blank">
                Figma
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="border-t border-t-metal-100 py-5 text-center dark:border-t-metal-700">
      <p class="text-body-4 font-normal text-metal-600 dark:text-metal-100">
        &copy;{{ new Date().getFullYear() }} All Rights Reserved by &nbsp;
        <NuxtLink
          to="https://staticmania.com/"
          target="_blank"
          class="font-medium">
          StaticMania
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
