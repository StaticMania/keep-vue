<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps, ref } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
interface AvatarBadgeProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}
const props = defineProps<AvatarBadgeProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
const avatarBadgeRef = ref<HTMLSpanElement>();
</script>
<template>
  <slot v-if="props.asChild" v-bind="restProps" :class="cn(props.class)"></slot>

  <span
    v-else
    v-bind="restProps"
    ref="avatarBadgeRef"
    :class="
      cn(
        'absolute bottom-0 right-0 size-3 rounded-full bg-success-500',
        props.class,
      )
    "></span>
</template>
