<script lang="ts" setup>
import { Button, Tooltip } from "~/src";
import TooltipIndicator from "~/src/components/Tooltip/TooltipArrow.vue";
import TooltipContainer from "~/src/components/Tooltip/TooltipContent.vue";

type TooltipPosition = "bottom" | "top" | "left" | "right";

const positions: TooltipPosition[] = ["top", "bottom", "left", "right"];
</script>

<template>
  <div class="flex h-44 items-center justify-center gap-5">
    <Tooltip v-for="position in positions" :key="position" :delay-duration="0">
      <TooltipAction as-child>
        <Button class="first-letter:uppercase">{{ position }}</Button>
      </TooltipAction>
      <TooltipContainer :side="position">
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>
        <template #tooltipIndicator>
          <TooltipIndicator :height="8" :width="12" />
        </template>
      </TooltipContainer>
    </Tooltip>
  </div>
</template>
