<script setup lang="ts">
import { cn } from "~/src/utils/cn";

const state = ref(false);

const toggle = () => {
  state.value = !state.value;
};
</script>

<template>
  <button @click="toggle">Click</button>
  <h1 :data-state="state" :class="cn('data-[state=true]:bg-metal-400')">
    Hello
  </h1>
</template>
