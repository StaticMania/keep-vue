<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { useCopy } from "~/hooks/UseCopy";
import { TooltipArrow, TooltipContent } from "~/src";
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
const { copy, copyToClipboard } = useCopy();

const restProps = computed(() => {
  const { class: _, code, ...rest } = props;
  return rest;
});
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
        <Tooltip :delay-duration="0">
          <TooltipAction as-child>
            <button
              class="mx-6 my-2.5"
              @click="() => copyToClipboard(Object.values(code)[codeType])">
              <PhosphorIconCheck
                v-if="copy"
                :size="20"
                weight="light"
                color="#fff" />
              <PhosphorIconCopy v-else :size="20" weight="light" color="#fff" />
            </button>
          </TooltipAction>
          <TooltipContent side="top">
            <p class="text-body-5 font-medium text-white">
              {{ copy ? "Copied" : " Copy Code" }}
            </p>
            <TooltipArrow :height="8" :width="12" />
          </TooltipContent>
        </Tooltip>
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
