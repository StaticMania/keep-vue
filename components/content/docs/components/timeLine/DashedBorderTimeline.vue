<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from "~/src";
import { DashedBorderTimelineCode } from "./timelineCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DashedBorderTimelineCode">
    <div class="flex items-center justify-center">
      <Timeline class="border-dashed">
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
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p
              class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2024
            </p>
            <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
              Step 2 Completed
            </h1>
            <p
              class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p
              class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
              September 23,2024
            </p>
            <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
              Step 3 Completed
            </h1>
            <p
              class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  </CodeHighlightWithPreview>
</template>
