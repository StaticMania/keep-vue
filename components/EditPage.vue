<script lang="ts" setup>
import { buttonVariants } from "~/src/components/Button/buttonTheme";
import { cn } from "~/src/utils/cn";

interface EditPageProps {
  pageLink: string;
  prevPageName?: string;
  prevPageLink?: string;
  nextPageName?: string;
  nextPageLink?: string;
}

const props = defineProps<EditPageProps>();

//to convent the file-name.md to fileName
function toCamelCase(str: string) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");
}

function processLink(link: string) {
  const parts = link.split("/");
  const lastPart = parts[parts.length - 1];
  const secondPart = parts[parts.length - 2];

  if (secondPart === "components") {
    if (lastPart.includes("-")) {
      return `/docs/components/${toCamelCase(lastPart)}`;
    } else return link;
  } else {
    return link;
  }
}

const githubPageLink = `https://github.com/StaticMania/keep-vue/tree/main/components/content${processLink(props.pageLink)}`;
</script>

<template>
  <div class="my-12">
    <div class="flex items-center justify-between">
      <!-- edit  -->
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

      <section class="flex items-center justify-center gap-4">
        <!-- prev component  -->
        <NuxtLink
          v-if="prevPageName && prevPageLink"
          :href="prevPageLink"
          :class="
            cn(buttonVariants({ variant: 'outline', color: 'secondary' }))
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4 fill-metal-600 dark:fill-white"
            viewBox="0 0 256 256">
            <path
              d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
          <span>{{ prevPageName }}</span>
        </NuxtLink>
        <!-- next component  -->
        <NuxtLink
          v-if="nextPageName && nextPageLink"
          :href="nextPageLink"
          :class="
            cn(buttonVariants({ variant: 'outline', color: 'secondary' }))
          ">
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
      </section>
    </div>
  </div>
</template>
