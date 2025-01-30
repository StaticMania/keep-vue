<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from "radix-vue";

const props = defineProps<PrimitiveProps>();
const forwardedProps = useForwardProps(props);
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="20"
        :height="14"
        fill="#455468"
        viewBox="0 0 256 256">
        <path
          d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
      </svg>
    </slot>
  </Primitive>
</template>
