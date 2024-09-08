<script lang="ts" setup>
import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipContainer,
  TooltipIndicator,
} from "~/src";
</script>

<template>
  <div class="flex h-52 items-center justify-center gap-5">
    <Tooltip :delay-duration="0">
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>

      <TooltipContainer>
        <p className="text-body-4 font-medium text-white">
          Tooltips - Title here
        </p>
        <p className="text-body-5 font-normal text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <template #tooltipIndicator>
          <TooltipIndicator :height="8" :width="12" />
        </template>
      </TooltipContainer>
    </Tooltip>
  </div>
</template>
