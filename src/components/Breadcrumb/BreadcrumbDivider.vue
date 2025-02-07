<script lang="ts" setup>
import type { LiHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbDividerProps
  extends /*@vue-ignore*/ LiHTMLAttributes {}

const props = defineProps<BreadcrumbDividerProps & ClassProps>();
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-metal-600 dark:fill-metal-400"
        viewBox="0 0 256 256">
        <path
          d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
      </svg>
    </slot>
  </li>
</template>
