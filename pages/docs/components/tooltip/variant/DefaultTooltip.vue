<script lang="ts" setup>
import { Tooltip, TooltipAction, TooltipArrow, TooltipContent } from "~/src";
</script>

<template>
  <div class="flex h-44 items-center justify-center">
    <Tooltip>
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>
      <TooltipContent>
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>
        <TooltipArrow :height="8" :width="12" />
      </TooltipContent>
    </Tooltip>
  </div>
</template>
