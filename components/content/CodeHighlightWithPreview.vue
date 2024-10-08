<script lang="ts" setup>
import { computed, ref, type HTMLAttributes } from "vue";
import { useCopy } from "~/hooks/UseCopy";
import { TooltipArrow, TooltipContent } from "~/src";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

interface CodeHighlightWithPreviewProps
  extends /* @vue-ignore */ HTMLAttributes {
  code: {
    [key: string]: string;
  };
  activeTab?: number;
}

const props = defineProps<CodeHighlightWithPreviewProps & ClassProps>();
const active = ref(props.activeTab ?? 0);

const { copy, copyToClipboard } = useCopy();

const restProps = computed(() => {
  const { class: _, activeTab, code, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="
      cn(
        'my-10 max-w-full overflow-hidden rounded-xl border border-metal-200 dark:border-metal-800',
        props.class,
      )
    ">
    <div
      class="flex items-center justify-between bg-[#0D1015] dark:bg-metal-900/60">
      <div class="flex items-center">
        <button
          id="preview-btn"
          type="button"
          :class="
            cn(
              'border-b border-b-transparent px-6 py-2.5 text-body-4 font-normal',
              active === 0
                ? 'border-b-metal-800 bg-metal-900/10 text-white dark:border-b-metal-200'
                : 'bg-metal-800 text-white opacity-50',
            )
          "
          @click="() => (active = 0)">
          Preview
        </button>

        <button
          v-for="(key, index) in Object.keys(code)"
          :key="key"
          :class="
            cn(
              'border-b border-b-transparent px-6 py-2.5 text-body-4 font-normal',
              active === index + 1
                ? 'border-b-metal-200 bg-metal-900/10 text-white'
                : 'bg-metal-900 text-white opacity-70',
            )
          "
          @click="() => (active = index + 1)">
          <span>{{ key }}</span>
        </button>
      </div>
      <div>
        <Tooltip :delay-duration="0">
          <TooltipAction as-child>
            <button
              class="mx-6 my-2.5"
              @click="
                () =>
                  copyToClipboard(
                    Object.values(code)[active === 0 ? 0 : active - 1],
                  )
              ">
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
      v-if="active !== 0"
      id="linkPage"
      class="max-h-[420px] overflow-y-auto bg-[#111b27] p-8 text-body-4">
      <Shiki
        lang="ts"
        :code="Object.values(code)[active - 1].trim()"
        class="text-wrap" />
    </div>

    <div
      v-if="active === 0"
      :class="cn('bg-white px-2 py-3 md:p-6 dark:bg-[#0D1015]', props.class)">
      <div className="h-full w-full overflow-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
code {
  white-space: pre-wrap !important;
  word-break: break-word;
}
</style>
