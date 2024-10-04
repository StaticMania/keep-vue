<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Toast } from "~/src";
import { DefaultToastCode } from "./toastCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultToastCode">
    <Button @click="() => Toast.info('Keep Vue is Awesome')">
      Default Toast
    </Button>
  </CodeHighlightWithPreview>
</template>
