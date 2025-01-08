const DefaultTooltipCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Button, Tooltip, TooltipAction, TooltipArrow, TooltipContent } from 'keep-vue'
</script>

<template>
    <Tooltip>
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>
      <TooltipContent>
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>
        <TooltipArrow :height="8" :width="12" />
      </TooltipContent>
    </Tooltip>
</template>
    `,
};

const tooltipPlacementCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Button, Tooltip, TooltipArrow, TooltipAction,TooltipContent } from "keep-vue";
</script>

<template>
  <Tooltip :delay-duration="0">

      <TooltipAction as-child>
        <Button>Left</Button>
      </TooltipAction>

      <TooltipContent side="left">
        <p class="text-body-5 font-medium text-white">Tooltips - Title here</p>

        <TooltipArrow :height="8" :width="12" />
        
      </TooltipContent>
    </Tooltip>
</template>`,
};

const tooltipWithLargeTextCode = {
  "TooltipComponent.vue": `
   <script setup>
import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipArrow,
  TooltipContent,
} from "keep-vue";
</script>

<template>
    <Tooltip :delay-duration="0">
      <TooltipAction as-child>
        <Button>Tooltip</Button>
      </TooltipAction>

      <TooltipContent>
        <p className="text-body-4 font-medium text-white">
          Tooltips - Title here
        </p>
        <p className="text-body-5 font-normal text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <TooltipArrow :height="8" :width="12" />
        
      </TooltipContent>
    </Tooltip>
</template>
    `,
};

const tooltipWithColorVariantCode = {
  "TooltipComponent.vue": `
   <script setup>
import { Button,Tooltip, TooltipAction, TooltipArrow, TooltipContent } from "keep-vue";

const tooltipColors = ["primary", "secondary", "success", "warning", "error"];
</script>

<template>
    <Tooltip v-for="color in tooltipColors" :key="color" :color="color">

      <TooltipAction as-child>
        <Button :color="color">Tooltip</Button>
      </TooltipAction>

      <TooltipContent>
        <p class="text-body-5 font-medium text-white first-letter:uppercase">
          {{ color }} tooltip
        </p>

        <TooltipArrow :height="8" :width="12" />

      </TooltipContent>
    </Tooltip>
</template>
    `,
};

export {
  DefaultTooltipCode,
  tooltipPlacementCode,
  tooltipWithColorVariantCode,
  tooltipWithLargeTextCode,
};
