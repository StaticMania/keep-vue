<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Toast } from "~/src";
import { ToastWithActionCode } from "./toastCode";
</script>

<template>
  <CodeHighlightWithPreview :code="ToastWithActionCode">
    <div class="flex items-center justify-center">
      <Button
        color="secondary"
        @click="
          () =>
            Toast('Keep Vue is Awesome', {
              action: {
                label: 'Action',
                onClick: () => console.log('Action is pressed'),
              },
            })
        ">
        Show Toast
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
