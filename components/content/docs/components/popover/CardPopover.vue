<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
} from "~/src";
import { CardPopoverCode } from "./popoverCode";
</script>

<template>
  <CodeHighlightWithPreview
    class="bg-metal-50 dark:bg-[#0D1015]"
    :code="CardPopoverCode">
    <div class="flex h-52 items-center justify-center gap-5">
      <Popover>
        <PopoverAction as-child>
          <Button>Left</Button>
        </PopoverAction>
        <PopoverContent
          side="left"
          class="z-20 max-w-[300px] rounded-xl bg-white dark:bg-metal-900">
          <div>
            <NuxtImg
              src="/images/keep-card.jpg"
              class="rounded-t-xl"
              alt="image"
              :width="600"
              :height="300" />
            <div class="space-y-2 p-6">
              <PopoverTitle>Keep Design System</PopoverTitle>
              <PopoverDescription>
                You can customize the styles and behavior of this component
                according to your requirements.
              </PopoverDescription>
              <Button>Learn More</Button>
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
          class="z-20 max-w-[300px] rounded-xl bg-white dark:bg-metal-900">
          <div>
            <NuxtImg
              src="/images/keep-card.jpg"
              class="rounded-t-xl"
              alt="image"
              :width="600"
              :height="300" />
            <div class="space-y-2 p-6">
              <PopoverTitle>Keep Design System</PopoverTitle>
              <PopoverDescription>
                You can customize the styles and behavior of this component
                according to your requirements.
              </PopoverDescription>
              <Button>Learn More</Button>
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
          class="z-20 max-w-[300px] rounded-xl bg-white dark:bg-metal-900">
          <div>
            <NuxtImg
              src="/images/keep-card.jpg"
              class="rounded-t-xl"
              alt="image"
              :width="600"
              :height="300" />
            <div class="space-y-2 p-6">
              <PopoverTitle>Keep Design System</PopoverTitle>
              <PopoverDescription>
                You can customize the styles and behavior of this component
                according to your requirements.
              </PopoverDescription>
              <Button>Learn More</Button>
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
          class="z-20 max-w-[300px] rounded-xl bg-white dark:bg-metal-900">
          <div>
            <NuxtImg
              src="/images/keep-card.jpg"
              class="rounded-t-xl"
              alt="image"
              :width="600"
              :height="300" />
            <div class="space-y-2 p-6">
              <PopoverTitle>Keep Design System</PopoverTitle>
              <PopoverDescription>
                You can customize the styles and behavior of this component
                according to your requirements.
              </PopoverDescription>
              <Button>Learn More</Button>
            </div>
          </div>
          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>
    </div>
  </CodeHighlightWithPreview>
</template>
