<template>
  <Navbar />
  <main class="relative pt-20">
    <div
      class="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20"
    ></div>
    <div class="docs-page"></div>
    <div
      class="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16"
    >
      <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
        <aside
          id="componentListSidebar"
          class="sticky top-28 h-[75vh] space-y-5 overflow-auto 2xl:top-56 2xl:py-6 2xl:pl-8"
        >
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/docs/components/alert">Alert</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/button">Button</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/badge">Badge</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs/components/card">Card</NuxtLink>
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
