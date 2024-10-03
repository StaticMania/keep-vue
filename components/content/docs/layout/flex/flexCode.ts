const FlexLayoutOneCode = {
  Code: `<template>
  <div class="flex flex-col gap-5 lg:flex-row">
    <div
      class="basis-4/5 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
    <div class="flex basis-1/5 flex-col gap-y-5">
      <div
        class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </div>
</template>`,
};

const FlexLayoutTwoCode = {
  Code: `<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center gap-5">
      <div
        class="basis-1/2 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-1/2 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
    <div class="flex flex-wrap gap-5 lg:flex-nowrap">
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </div>
</template>`,
};

const FlexLayoutThreeCode = {
  Code: `<template>
  <div class="flex flex-col gap-5">
    <div
      class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
    <div class="flex flex-wrap gap-5 lg:flex-nowrap">
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div
        class="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  </div>
</template>`,
};

export { FlexLayoutOneCode, FlexLayoutThreeCode, FlexLayoutTwoCode };
