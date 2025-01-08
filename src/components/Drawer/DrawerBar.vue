<script lang="ts" setup>
import type { DrawerDirection } from "vaul-vue";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { keepDrawerTheme } from "./drawerTheme";
import { useDrawer } from "./useDrawerStore";

export interface DrawerBarProps extends /*@vue-ignore*/ HTMLAttributes {}

const { position } = useDrawer();
const props = defineProps<DrawerBarProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        keepDrawerTheme.bar.base,
        keepDrawerTheme.bar.position[position as DrawerDirection],
        props.class,
      )
    " />
</template>
