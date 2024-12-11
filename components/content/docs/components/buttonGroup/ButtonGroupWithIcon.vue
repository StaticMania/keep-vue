<script lang="ts" setup>
import { Button, ButtonGroup } from "~/src";
import { buttonGroupWithIconCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonGroupWithIconCode">
    <div class="flex items-center justify-center gap-x-4">
      <ButtonGroup class="">
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="start">
          <PhosphorIconCube :size="20" class="mr-1.5" />
          Profile
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="center">
          <PhosphorIconGear :size="20" class="mr-1.5" />
          Settings
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 hover:text-metal-800 focus-visible:ring-metal-200 dark:border-metal-400 dark:text-metal-300 dark:hover:text-metal-400"
          position="end">
          <PhosphorIconChatCircleDots :size="24" class="mr-1.5" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
