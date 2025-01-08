<script lang="ts" setup>
import CodeBox from "./CodeBox.vue";
import { colors } from "./ColorsApi";
</script>

<template>
  <section>
    <div class="my-8 flex flex-row lg:flex-col lg:space-y-4">
      <div class="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
        <div class="w-20">
          <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Primary
          </p>
        </div>

        <CodeBox
          v-for="color in colors.primary"
          :id="color.id"
          :key="color.id"
          :code="color.code"
          :color="color.class" />
      </div>
      <div class="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
        <div class="w-20">
          <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Success
          </p>
        </div>

        <CodeBox
          v-for="color in colors.success"
          :id="color.id"
          :key="color.id"
          :code="color.code"
          :color="color.class" />
      </div>
      <div class="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
        <div class="w-20">
          <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Warning
          </p>
        </div>
        <CodeBox
          v-for="color in colors.warning"
          :id="color.id"
          :key="color.id"
          :code="color.code"
          :color="color.class" />
      </div>
      <div class="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
        <div class="w-20">
          <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Error
          </p>
        </div>
        <CodeBox
          v-for="color in colors.error"
          :id="color.id"
          :key="color.id"
          :code="color.code"
          :color="color.class" />
      </div>
      <div class="flex flex-col flex-wrap items-start gap-2 lg:flex-row">
        <div class="w-20">
          <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Metal
          </p>
        </div>
        <CodeBox
          v-for="color in colors.metal"
          :id="color.id"
          :key="color.id"
          :code="color.code"
          :color="color.class" />
      </div>
    </div>
  </section>
</template>
