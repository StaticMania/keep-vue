<template>
  <header class="fixed top-0 z-50 w-full border-b border-metal-100 bg-white">
    <div class="relative mx-auto max-w-7xl px-6 2xl:px-0">
      <nav class="flex items-center justify-between py-4">
        <NuxtLink to="/">
          <NuxtImg src="/keep.svg" width="130" height="53" />
        </NuxtLink>

        <div>
          <NuxtLink
            to="/docs/getting-started/introduction"
            class="rounded-lg bg-metal-900 px-4 py-2.5 text-body-4 font-normal capitalize text-white transition-all duration-300 hover:bg-metal-800"
          >
            Get Started
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
