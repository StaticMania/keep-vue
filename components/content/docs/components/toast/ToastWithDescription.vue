<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Toast } from "~/src";
import { ToastWithDescriptionCode } from "./toastCode";
</script>

<template>
  <CodeHighlightWithPreview :code="ToastWithDescriptionCode">
    <Button
      @click="
        () =>
          Toast('Keep Vue is Awesome', {
            description:
              'Elevate your web projects with Keep Vue 40+ customizable components.',
          })
      ">
      Show Toast
    </Button>
  </CodeHighlightWithPreview>
</template>
