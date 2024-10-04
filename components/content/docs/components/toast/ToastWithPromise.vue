<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Toast } from "~/src";
import { ToastWithPromiseCode } from "./toastCode";

const promise = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Keep Vue" }), 2000),
  );
</script>

<template>
  <CodeHighlightWithPreview :code="ToastWithPromiseCode">
    <Button
      @click="
        () =>
          Toast.promise(promise, {
            loading: 'Loading...',
            success: (data: any) => {
              return `${data.name} toast has been added`;
            },
          })
      ">
      Show Toast
    </Button>
  </CodeHighlightWithPreview>
</template>
