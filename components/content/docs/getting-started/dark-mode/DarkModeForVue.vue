<script lang="ts" setup>
import CodeHighlight from "~/components/content/CodeHighlight.vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from "~/src";
import {
  vueThemeSwitcherComponentCode,
  vueUseInstallForVue,
} from "./darkModeCodes";
import ThemeSwitcherForDoc from "./ThemeSwitcherForDoc.vue";
</script>

<template>
  <Timeline class="my-12 ml-2">
    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 1
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          Start by installing the `vueUse` module as a dependency in your
          project.
        </h1>
        <div class="!my-4">
          <CodeHighlight :code="vueUseInstallForVue" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 2
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          Create a Theme Switcher component.
        </h1>
        <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          To toggle between dark and light modes, use the provided code to
          create a simple theme switcher component.
        </p>
        <div class="!my-4">
          <CodeHighlightWithPreview :code="vueThemeSwitcherComponentCode">
            <ThemeSwitcherForDoc />
          </CodeHighlightWithPreview>
        </div>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
