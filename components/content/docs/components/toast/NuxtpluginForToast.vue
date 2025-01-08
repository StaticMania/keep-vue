<script lang="ts" setup>
import CodeHighlight from "~/components/content/CodeHighlight.vue";
import { nuxtPluginForToast } from "./toastCode";
</script>

<template>
  <CodeHighlight :code="nuxtPluginForToast" />
</template>
