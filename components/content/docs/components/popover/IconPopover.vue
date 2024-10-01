<script lang="ts" setup>
import { PhConfetti } from "@phosphor-icons/vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from "~/src";
import { IconPopoverCode } from "./popoverCode";
</script>

<template>
  <CodeHighlightWithPreview :code="IconPopoverCode">
    <div class="flex h-52 items-center justify-center gap-5">
      <Popover>
        <PopoverAction as-child>
          <Button>Left</Button>
        </PopoverAction>
        <PopoverContent
          side="left"
          class="z-20 max-w-xs rounded-xl bg-white p-6 shadow-sm dark:border-metal-800 dark:bg-metal-900">
          <div>
            <div
              class="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <PhConfetti :size="24" weight="fill" />
            </div>
            <div class="space-y-2 pt-4">
              <PopoverTitle class="text-body-2 font-semibold">
                Keep Design System
              </PopoverTitle>
              <PopoverDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since
              </PopoverDescription>
            </div>
            <p
              class="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">
              Step - 1 / 5
            </p>
            <div class="flex items-center justify-between gap-5 pt-6">
              <Button variant="outline" class="w-full">Skip</Button>
              <Button class="w-full">Next</Button>
            </div>
          </div>

          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverAction as-child>
          <Button>Right</Button>
        </PopoverAction>
        <PopoverContent
          side="right"
          class="z-20 max-w-xs rounded-xl bg-white p-6 shadow-sm dark:border-metal-800 dark:bg-metal-900">
          <div>
            <div
              class="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <PhConfetti :size="24" weight="fill" />
            </div>
            <div class="space-y-2 pt-4">
              <PopoverTitle class="text-body-2 font-semibold">
                Keep Design System
              </PopoverTitle>
              <PopoverDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since
              </PopoverDescription>
            </div>
            <p
              class="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">
              Step - 1 / 5
            </p>
            <div class="flex items-center justify-between gap-5 pt-6">
              <Button variant="outline" class="w-full">Skip</Button>
              <Button class="w-full">Next</Button>
            </div>
          </div>

          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverAction as-child>
          <Button>Top</Button>
        </PopoverAction>
        <PopoverContent
          side="top"
          class="z-20 max-w-xs rounded-xl bg-white p-6 shadow-sm dark:border-metal-800 dark:bg-metal-900">
          <div>
            <div
              class="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <PhConfetti :size="24" weight="fill" />
            </div>
            <div class="space-y-2 pt-4">
              <PopoverTitle class="text-body-2 font-semibold">
                Keep Design System
              </PopoverTitle>
              <PopoverDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since
              </PopoverDescription>
            </div>
            <p
              class="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">
              Step - 1 / 5
            </p>
            <div class="flex items-center justify-between gap-5 pt-6">
              <Button variant="outline" class="w-full">Skip</Button>
              <Button class="w-full">Next</Button>
            </div>
          </div>

          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverAction as-child>
          <Button>Bottom</Button>
        </PopoverAction>
        <PopoverContent
          class="z-20 max-w-xs rounded-xl bg-white p-6 shadow-sm dark:border-metal-800 dark:bg-metal-900">
          <div>
            <div
              class="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <PhConfetti :size="24" weight="fill" />
            </div>
            <div class="space-y-2 pt-4">
              <PopoverTitle class="text-body-2 font-semibold">
                Keep Design System
              </PopoverTitle>
              <PopoverDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since
              </PopoverDescription>
            </div>
            <p
              class="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">
              Step - 1 / 5
            </p>
            <div class="flex items-center justify-between gap-5 pt-6">
              <Button variant="outline" class="w-full">Skip</Button>
              <Button class="w-full">Next</Button>
            </div>
          </div>
          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>
    </div>
  </CodeHighlightWithPreview>
</template>
