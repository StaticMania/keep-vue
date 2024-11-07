<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { Toast } from "~/src";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

interface CodeHighlightWithPreviewProps
  extends /* @vue-ignore */ HTMLAttributes {
  code: {
    [key: string]: string;
  };
}

const props = defineProps<CodeHighlightWithPreviewProps & ClassProps>();

const codeType = ref(0);
const { copied, copy } = useClipboard({
  copiedDuring: 3000,
});

const restProps = computed(() => {
  const { class: _, code, ...rest } = props;
  return rest;
});

const handleCopy = (code: object, codeType: number): void => {
  copy(Object.values(code)[codeType]);
  Toast.success("Copied to clipboard", {
    classes: {
      toast:
        "dark:!bg-metal-900/30 dark:!text-white dark:!border-metal-800 !bg-white !text-metal-900 !border-metal-50",
    },
  });
};
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'my-5 w-full overflow-hidden rounded-xl border border-metal-900 bg-[#0D1015] dark:bg-[#0D1015]/90',
        props.class,
      )
    ">
    <div class="flex justify-between">
      <div class="flex text-white">
        <button
          v-for="(key, index) in Object.keys(code)"
          :key="key"
          :class="
            cn(
              'border-b border-r border-metal-800 px-6 py-2.5 text-body-4 font-normal',
              codeType === index ? 'bg-metal-900/10' : 'bg-metal-900',
            )
          "
          @click="() => (codeType = index)">
          <span>{{ key }}</span>
        </button>
      </div>
      <div>
        <button class="mx-6 my-2.5" @click="() => handleCopy(code, codeType)">
          <PhosphorIconCheck
            v-if="copied"
            :size="20"
            weight="light"
            color="#fff" />
          <PhosphorIconCopy v-else :size="20" weight="light" color="#fff" />
        </button>
      </div>
    </div>

    <div
      id="linkPage"
      class="max-h-[420px] overflow-y-auto bg-[#111b27] p-8 text-body-4">
      <Shiki
        lang="ts"
        :code="Object.values(code)[codeType].trim()"
        class="text-wrap" />
    </div>
  </div>
</template>

<style scoped>
code {
  white-space: pre-wrap !important;
  word-break: break-word;
}
</style>
