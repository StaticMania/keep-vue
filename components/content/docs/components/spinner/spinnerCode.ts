const DefaultSpinnerCode = {
  "SpinnerCode.vue": `<script setup>
import { Spinner } from "keep-vue";
</script>

<template>
     <Spinner />
</template>`,
};

const SpinnerColorsCode = {
  "SpinnerCode.vue": `<script setup>
import { Spinner } from "keep-vue";
</script>

<template>
   <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="error" />
      <Spinner color="warning" />
</template>`,
};

export { DefaultSpinnerCode, SpinnerColorsCode };
