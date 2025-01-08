<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup></script>

<template>
  <section class="hero-area py-10 md:py-20 lg:pb-24 lg:pt-28">
    <div class="mx-auto max-w-7xl px-6 2xl:px-0">
      <div
        class="grid grid-cols-1 items-start justify-between gap-5 lg:grid-cols-2">
        <div class="w-full lg:col-span-1">
          <div class="mt-5">
            <NuxtLink
              to="https://www.producthunt.com/posts/keep-vue?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-keep&#0045;react"
              target="_blank"
              class="inline-block">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=423668&theme=dark"
                alt="Keep Product Hunt"
                class="h-[40px] w-[200px] lg:h-[54px] lg:w-[250px]" />
            </NuxtLink>
            <h1
              class="mt-3 max-w-xl text-heading-6 !font-semibold text-metal-900 md:text-heading-3">
              <span class="block">Supercharge your web</span>
              <span class="block">development with</span>
              <span class="hero-text block">Keep Vue</span>
            </h1>
            <p
              class="mb-7 mt-2 w-full text-body-4 font-normal text-metal-600 md:max-w-[500px] lg:max-w-[526px] lg:text-body-3">
              Elevate your web projects with Keep Vue&apos;s 40+ customizable
              components. Access open-source resources for efficient development
              and bring your ideas to life with ease.
            </p>
            <div
              class="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
              <div
                class="inline-flex w-[270px] items-center justify-between divide-x-2 divide-metal-100 rounded-lg border border-metal-200 bg-white px-3.5 py-3">
                <span class="text-body-4 font-normal text-metal-500">
                  npm install keep-vue
                </span>
                <button class="pl-2">
                  <PhosphorIconClipboard :size="18" color="#8897AE" />
                </button>
              </div>
              <Link
                href="/docs/getting-started/introduction"
                class="rounded-lg bg-metal-900 px-4 py-3 text-body-4 font-normal capitalize text-white transition-all duration-300 hover:bg-metal-800">
                Get Started
              </Link>
            </div>
            <p class="mt-2 text-body-4 font-normal text-metal-600">
              ⭐ Got 1.2k stars on Github Repository
            </p>
          </div>
        </div>
        <div class="w-full lg:col-span-1">
          <NuxtImg
            src="/images/home/hero-1.png"
            alt="hero"
            class="lg:scale-[1.2]" />
        </div>
      </div>
    </div>
  </section>
</template>
