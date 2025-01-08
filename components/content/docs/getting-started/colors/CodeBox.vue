<script lang="ts" setup>
import { cn } from "~/src/utils/cn";

const { copied, copy } = useClipboard({
  copiedDuring: 3000,
});

interface CodeBoxProps {
  color: string;
  id: number;
  code: string;
}
defineProps<CodeBoxProps>();
</script>

<template>
  <div>
    <button
      :class="
        cn(
          'group flex h-10 w-16 border-spacing-2 items-center justify-center rounded-lg',
          color,
        )
      "
      @click="() => copy(code)">
      <span
        :class="
          cn(
            'opacity-0 transition-all duration-300 group-hover:opacity-100',
            id > 300 ? 'text-metal-100' : 'text-metal-900',
          )
        ">
        <PhosphorIconCheck v-if="copied" :size="18" />
        <PhosphorIconCopy v-else :size="18" />
      </span>
    </button>
    <div class="mt-1 text-left">
      <p class="text-[10px] font-medium text-metal-600 dark:text-metal-300">
        {{ id }}
      </p>
      <p class="text-[10px] font-medium text-metal-600 dark:text-metal-300">
        {{ code }}
      </p>
    </div>
  </div>
</template>
