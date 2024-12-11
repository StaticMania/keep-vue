<script lang="ts" setup>
import { ButtonGroup } from "~/src";
import { defaultButtonGroupCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="defaultButtonGroupCode">
    <div class="flex items-center justify-center">
      <ButtonGroup>
        <Button
          variant="outline"
          color="secondary"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="start">
          Profile
        </Button>
        <Button
          variant="outline"
          color="secondary"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="center">
          Message
        </Button>
        <Button
          variant="outline"
          color="secondary"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="end">
          Setting
        </Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
