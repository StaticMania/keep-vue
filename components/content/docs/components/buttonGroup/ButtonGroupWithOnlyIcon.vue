<script lang="ts" setup>
import { Button, ButtonGroup } from "~/src";
import { buttonGroupWithOnlyIconCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonGroupWithOnlyIconCode">
    <div class="flex items-center justify-center">
      <ButtonGroup>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="start"
          shape="icon">
          <PhosphorIconCube :size="20" />
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="center"
          shape="icon">
          <PhosphorIconGear :size="20" />
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="end"
          shape="icon">
          <PhosphorIconChatCircleDots :size="20" />
        </Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
