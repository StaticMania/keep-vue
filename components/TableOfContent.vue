<script lang="ts" setup>
import { ref } from "vue";

const { toc } = useContent();
const activeLink = ref("");

const setActiveLink = (id: string) => {
  activeLink.value = id;
};
</script>

<template>
  <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
    <aside id="linkPage" class="sticky top-28 h-[80vh] 2xl:top-60">
      <div class="2xl:pl-5">
        <div class="flex flex-col justify-between overflow-y-auto">
          <h4
            class="mb-2 text-body-4 font-semibold uppercase text-black/100 dark:text-white">
            On this page
          </h4>
          <nav id="visible-table-of-contents">
            <ul
              id="toc-ul"
              class="border-l border-l-metal-100 dark:border-l-metal-800">
              <li v-for="item in toc?.links" :key="item.id">
                <NuxtLink
                  :href="`#${item.id}`"
                  :class="{ 'active-link': activeLink === item.id }"
                  @click="setActiveLink(item.id)">
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  </div>
</template>
