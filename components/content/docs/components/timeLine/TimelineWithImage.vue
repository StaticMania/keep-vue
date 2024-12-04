<script lang="ts" setup>
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from "~/src";
import { TimelineWithImageCode } from "./timelineCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TimelineWithImageCode">
    <div class="flex items-center justify-center">
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p
              class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2024
            </p>
            <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
              Step 1 Completed
            </h1>
            <p
              class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              incidunt.
            </p>
            <NuxtImg
              src="https://picsum.photos/400/230?v=1"
              class="!mt-4 block rounded-xl"
              alt="item1" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p
              class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              November 10, 2024
            </p>
            <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
              Step 2 Completed
            </h1>
            <p
              class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              incidunt.
            </p>
            <NuxtImg
              src="https://picsum.photos/400/230?v=2"
              class="!mt-4 block rounded-xl"
              alt="item2" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p
              class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              December 20,2024
            </p>
            <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
              Step 3 Completed
            </h1>
            <p
              class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              incidunt.
            </p>
            <NuxtImg
              src="https://picsum.photos/400/230?v=3"
              class="!mt-4 block rounded-xl"
              alt="item3" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  </CodeHighlightWithPreview>
</template>
