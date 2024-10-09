<script lang="ts" setup>
import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
} from "~/src";
import { tooltipWithColorVariantCode } from "./tooltipCode";

const tooltipColors = ["primary", "secondary", "success", "warning", "error"];
</script>

<template>
  <CodeHighlightWithPreview :code="tooltipWithColorVariantCode">
    <div class="flex h-44 items-center justify-center gap-3">
      <Tooltip
        v-for="color in tooltipColors"
        :key="color"
        :color="color as any">
        <TooltipAction as-child>
          <Button :color="color as any">Tooltip</Button>
        </TooltipAction>
        <TooltipContent>
          <p class="text-body-5 font-medium text-white first-letter:uppercase">
            {{ color }} tooltip
          </p>
          <TooltipArrow :height="8" :width="12" />
        </TooltipContent>
      </Tooltip>
    </div>
  </CodeHighlightWithPreview>
</template>
