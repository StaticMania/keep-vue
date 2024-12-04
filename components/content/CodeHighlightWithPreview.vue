<script lang="ts" setup>
import { computed, ref, type HTMLAttributes } from "vue";
import { Toast } from "~/src";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

interface CodeHighlightWithPreviewProps
  extends /* @vue-ignore */ HTMLAttributes {
  code: {
    [key: string]: string;
  };
  activeTab?: number;
  previewClass?: HTMLAttributes["class"];
}

const props = defineProps<CodeHighlightWithPreviewProps & ClassProps>();
const active = ref(props.activeTab ?? 0);

const restProps = computed(() => {
  const { class: _, activeTab, previewClass, code, ...rest } = props;
  return rest;
});

// copy to clipboard function
const { copied, copy } = useClipboard({
  copiedDuring: 3000,
});
const handleCopy = (code: object) => {
  copy(Object.values(code)[active.value === 0 ? 0 : active.value - 1]);
  if (copied)
    Toast.success("Copied to clipboard", {
      classes: {
        toast:
          "dark:!bg-metal-900/30 dark:!text-white dark:!border-metal-800 !bg-transparent !text-metal-900 !border-metal-50",
      },
    });
};
</script>

<template>
  <div class="mt-8 space-y-6">
    <!-- nav  -->
    <div
      class="flex items-center justify-between bg-transparent dark:bg-transparent">
      <div
        class="flex w-full items-center border-b border-metal-200 dark:border-metal-600">
        <button
          id="preview-btn"
          type="button"
          :class="
            cn(
              '-mb-[2px] border-b-transparent px-6 py-2.5 text-body-4 font-normal',
              active === 0
                ? 'border-b-2 border-b-metal-900 bg-transparent font-semibold text-metal-900 dark:border-b-white dark:text-white'
                : 'bg-transparent font-medium text-metal-900 opacity-70 dark:text-metal-300',
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
              '-mb-[2px] border-b-transparent px-6 py-2.5 text-body-4 font-normal',
              active === index + 1
                ? 'border-b-2 border-b-metal-900 bg-transparent font-semibold text-metal-900 dark:border-b-white dark:text-white'
                : 'bg-transparent font-medium text-metal-900 opacity-70 dark:text-metal-300',
            )
          "
          @click="() => (active = index + 1)">
          <span>{{ key }}</span>
        </button>
      </div>
    </div>

    <!-- showing area  -->
    <div
      v-bind="restProps"
      :class="
        cn(
          'max-w-full overflow-hidden rounded-xl border border-metal-100 bg-white dark:border-metal-800',
          props.class,
        )
      ">
      <!-- code preview block  -->
      <div
        v-if="active !== 0"
        id="codeHighlight"
        class="relative max-h-[420px] overflow-y-auto bg-[#111b27] p-8 text-body-4">
        <Shiki
          lang="ts"
          :code="Object.values(code)[active - 1].trim()"
          class="text-wrap" />

        <!-- copy btn -->
        <div class="absolute right-4 top-4">
          <button class="mx-6 my-2.5" @click="() => handleCopy(code)">
            <PhosphorIconCheck
              v-if="copied"
              :size="20"
              weight="light"
              color="#fff" />
            <PhosphorIconCopy
              v-else
              :size="20"
              weight="light"
              class="text-white dark:text-white" />
          </button>
        </div>
      </div>

      <!-- component preview block  -->
      <div
        v-else
        :class="
          cn(
            'flex min-h-[420px] w-full items-center justify-center bg-transparent px-20 py-14 dark:bg-[#0D1015]',
            props.previewClass,
          )
        ">
        <div class="mx-auto w-full">
          <slot />
        </div>
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
