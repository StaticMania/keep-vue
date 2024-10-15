<script lang="ts" setup>
import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from "~/src";
import {
  addTwCssForNuxt,
  ImportKeepNuxt,
  installKeepVueForNuxt,
  NuxtInstall,
  phIconNuxt,
  twConfigForNuxt,
  twForNuxt,
} from "./introductionCode";
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
          Create a Nuxt Application
        </h1>
        <div class="!my-4">
          <CodeHighlight :code="NuxtInstall" />
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
          Install Tailwind CSS
        </h1>
        <div class="!my-4">
          <CodeHighlight :code="twForNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 3
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          Install Keep Vue and Phosphor Icons
        </h1>
        <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          The Phosphor icon library is optional. If you prefer not to use
          Phosphor icons, feel free to install any other icon library of your
          choice.
        </p>
        <div class="!my-4">
          <CodeHighlight :code="installKeepVueForNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 4 (Optional)
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          If you install Phosphor Icon then add nuxt-phosphor-icons to the
          modules section of nuxt.config.ts
        </h1>
        <div class="!my-4">
          <CodeHighlight :code="phIconNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 5
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          Create a Style folder in the root directory, and then create a
          main.css file if it hasn't been created yet. After that, add the code
          below.
        </h1>
        <div class="!my-4">
          <CodeHighlight :code="addTwCssForNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 6
        </p>
        <h1 class="text-body-3 font-medium text-metal-900 dark:text-white">
          Configure Tailwind CSS
        </h1>
        <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          Open your `tailwind.config.js` or `tailwind.config.ts` file and wrap
          your configuration with the `keepTheme` function to integrate Keep
          Vue's theming.
        </p>
        <div class="!my-4">
          <CodeHighlight :code="twConfigForNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem class="max-w-full">
      <TimelinePoint />
      <TimelineContent>
        <p
          class="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">
          Step 6
        </p>
        <p class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          Congratulations! You've successfully set up Keep Vue in your Nuxt
          application. You can now start using components from the Keep Vue
          library in your project.
        </p>
        <div class="!my-4">
          <CodeHighlight :code="ImportKeepNuxt" />
        </div>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
