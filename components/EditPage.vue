<script lang="ts" setup>
import { buttonVariants } from "~/src/components/Button/buttonTheme";
import { cn } from "~/src/utils/cn";

interface EditPageProps {
  pageLink: string;
  nextPageName: string;
  nextPageLink: string;
}

const props = defineProps<EditPageProps>();

const githubPageLink = `https://github.com/StaticMania/keep-vue/blob/main/content${props.pageLink}`;
</script>

<template>
  <div class="my-12">
    <div class="flex items-center justify-between">
      <NuxtLink
        target="_black"
        :href="githubPageLink"
        :class="
          buttonVariants({
            variant: 'outline',
            color: 'secondary',
          })
        ">
        Edit this page
      </NuxtLink>

      <NuxtLink
        :href="nextPageLink"
        :class="cn(buttonVariants({ variant: 'outline', color: 'secondary' }))">
        <span>{{ nextPageName }}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4 fill-metal-600 dark:fill-white"
            viewBox="0 0 256 256">
            <path
              d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
