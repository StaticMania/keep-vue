<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Toast } from "~/src";
import { DefaultToastCode } from "./toastCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultToastCode">
    <div class="flex items-center justify-center">
      <Button @click="() => Toast.info('Keep Vue is Awesome')">
        Default Toast
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
