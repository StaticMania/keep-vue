<template>
  <div>
    <div class="mb-[50px]">
      <h1
        class="mb-2 inline-block w-full text-heading-6 font-semibold text-metal-900"
      >
        {{ title }}
      </h1>
      <p class="text-body-3 text-metal-500">{{ description }}</p>
    </div>
    <div id="mainContent">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocsContentLayout",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
