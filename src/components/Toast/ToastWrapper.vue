<script setup lang="ts">
import { defineProps } from "vue";
import { Toaster as Sonner, type ToasterProps } from "vue-sonner";

const props = defineProps<ToasterProps>();
</script>

<template>
  <Sonner class="toaster group" v-bind="props" />
</template>

<!-- :toast-options="{
  // unstyled: true,
  classes: {
    toast:
      'group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-metal-900 group-[.toaster]:text-metal-900 group-[.toaster]:border-metal-100 dark:group-[.toaster]:border-metal-800 group-[.toaster]:shadow-large rounded-xl',
    description:
      'group-[.toast]:text-metal-600 text-body-4 font-normal text-metal-600 dark:text-metal-600 dark:group-[.toast]:text-metal-300',
    actionButton:
      'group-[.toast]:bg-metal-900 dark:group-[.toast]:bg-metal-800 group-[.toast]:text-white dark:group-[.toast]:text-white',
    cancelButton: 'group-[.toast]:bg-metal-900 group-[.toast]:text-white',
    title: 'text-body-4 font-medium text-metal-900 dark:!text-white',
  },
}"  -->
