<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Toast } from "~/src";
import { ToastVariantCode } from "./toastCode";
</script>

<template>
  <CodeHighlightWithPreview :code="ToastVariantCode">
    <div class="flex items-center gap-3">
      <Button @click="() => Toast.info('Keep Vue is Awesome')">
        Info Toast
      </Button>
      <Button
        color="success"
        @click="() => Toast.success('Keep Vue is Awesome')">
        Success Toast
      </Button>
      <Button
        color="warning"
        @click="() => Toast.warning('Keep Vue is Awesome')">
        Warning Toast
      </Button>
      <Button color="error" @click="() => Toast.error('Keep Vue is Awesome')">
        Error Toast
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
