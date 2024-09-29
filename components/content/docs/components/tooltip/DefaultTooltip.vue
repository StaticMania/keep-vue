<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Tooltip, TooltipAction, TooltipArrow, TooltipContent } from "~/src";
import { DefaultTooltipCode } from "./tooltipCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultTooltipCode">
    <div class="flex h-44 items-center justify-center">
      <Tooltip>
        <TooltipAction as-child>
          <Button>Tooltip</Button>
        </TooltipAction>
        <TooltipContent>
          <p class="text-body-5 font-medium text-white">
            Tooltips - Title here
          </p>
          <TooltipArrow :height="8" :width="12" />
        </TooltipContent>
      </Tooltip>
    </div>
  </CodeHighlightWithPreview>
</template>
