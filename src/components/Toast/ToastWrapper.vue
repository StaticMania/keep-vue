<script setup lang="ts">
import { Toaster as Sonner, type ToasterProps } from "vue-sonner";

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner class="toaster group" v-bind="props" rich-colors />
</template>
