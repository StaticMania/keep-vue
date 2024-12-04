<script lang="ts" setup>
import { Button, ButtonGroup } from "~/src";
import { buttonGroupWithOnlyIconCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonGroupWithOnlyIconCode">
    <div class="flex items-center justify-center">
      <ButtonGroup>
        <Button position="start" shape="icon">
          <PhosphorIconCube :size="20" />
        </Button>
        <Button position="center" shape="icon">
          <PhosphorIconGear :size="20" />
        </Button>
        <Button position="end" shape="icon">
          <PhosphorIconChatCircleDots :size="20" />
        </Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
