<script lang="ts" setup>
import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
} from "~/src";
import { tooltipWithLargeTextCode } from "./tooltipCode";
</script>

<template>
  <CodeHighlightWithPreview :code="tooltipWithLargeTextCode">
    <div class="flex h-52 items-center justify-center gap-5">
      <Tooltip :delay-duration="0">
        <TooltipAction as-child>
          <Button>Tooltip</Button>
        </TooltipAction>

        <TooltipContent>
          <p class="text-body-4 font-medium text-white">
            Tooltips - Title here
          </p>
          <p class="text-body-5 font-normal text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <TooltipArrow :height="8" :width="12" />
        </TooltipContent>
      </Tooltip>
    </div>
  </CodeHighlightWithPreview>
</template>
