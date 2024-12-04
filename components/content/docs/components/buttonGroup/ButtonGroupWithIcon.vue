<script lang="ts" setup>
import { Button, ButtonGroup } from "~/src";
import { buttonGroupWithIconCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonGroupWithIconCode">
    <div class="flex items-center justify-center gap-x-4">
      <ButtonGroup>
        <Button position="start">
          <PhosphorIconCube :size="20" class="mr-1.5" />
          Profile
        </Button>
        <Button position="center">
          <PhosphorIconGear :size="20" class="mr-1.5" />
          Settings
        </Button>
        <Button position="end">
          <PhosphorIconChatCircleDots :size="24" class="mr-1.5" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
