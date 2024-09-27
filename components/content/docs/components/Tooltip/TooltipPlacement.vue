<script lang="ts" setup>
import { Button, Tooltip, TooltipArrow, TooltipContent } from "~/src";
import { tooltipPlacementCode } from "./tooltipCode";

type TooltipPosition = "bottom" | "top" | "left" | "right";

const positions: TooltipPosition[] = ["top", "bottom", "left", "right"];
</script>

<template>
  <CodeHighlightWithPreview :code="tooltipPlacementCode">
    <div class="flex h-44 items-center justify-center gap-5">
      <Tooltip
        v-for="position in positions"
        :key="position"
        :delay-duration="0">
        <TooltipAction as-child>
          <Button class="first-letter:uppercase">{{ position }}</Button>
        </TooltipAction>
        <TooltipContent :side="position">
          <p class="text-body-5 font-medium text-white">
            Tooltips - Title here
          </p>
          <TooltipArrow :height="8" :width="12" />
        </TooltipContent>
      </Tooltip>
    </div>
  </CodeHighlightWithPreview>
</template>
