<script lang="ts" setup>
export type BoxProps = {
  asChild?: true | undefined;
};

const props = withDefaults(defineProps<BoxProps>(), {
  asChild: undefined,
});

const node = ref<HTMLElement | null>(null);
const setRef = (value: HTMLElement | null) => (node.value = value);
</script>
<template>
  <slot
    :ref="setRef"
    v-if="props.asChild"
    v-bind="{
      ...$attrs,
    }" />

  <div v-else v-bind="$attrs" ref="node">
    <slot>default Value</slot>
  </div>
</template>
