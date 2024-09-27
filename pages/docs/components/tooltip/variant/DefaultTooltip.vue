<script lang="ts" setup>
import {
  Tooltip,
  TooltipAction,
  TooltipContainer,
  TooltipIndicator,
} from "~/src";
</script>

<template>
  <div class="flex h-44 items-center justify-center">
    <Tooltip>
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>
      <TooltipContainer>
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>
        <template #tooltipIndicator>
          <TooltipIndicator :height="8" :width="12" />
        </template>
      </TooltipContainer>
    </Tooltip>
  </div>
</template>
