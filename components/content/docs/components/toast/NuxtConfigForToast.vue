<script lang="ts" setup>
import CodeHighlight from "~/components/content/CodeHighlight.vue";
import { nuxtConfigForToast } from "./toastCode";
</script>

<template>
  <CodeHighlight :code="nuxtConfigForToast" />
</template>
