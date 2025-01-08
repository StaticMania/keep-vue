<script lang="ts" setup>
import { onMounted, ref } from "vue";

const { toc } = useContent();
const activeLink = ref("");

const setActiveLink = (id: string) => {
  activeLink.value = id;
};

//handle current active link
const updateActiveLinkOnScroll = () => {
  // in doc the heading element is h2
  const headingElements = Array.from(
    document?.querySelectorAll<HTMLHeadingElement>("h2[id]"),
  );

  const scrollTop =
    document?.documentElement.scrollTop || document?.body.scrollTop;

  headingElements?.forEach((anchor) => {
    // get anchor tag under the h2 element
    const link = document?.querySelector<HTMLAnchorElement>(
      `h2[id="${anchor.id}"] a`,
    );

    if (link) {
      link?.classList.remove("active-link");
    }
  });

  // Activate the first matching anchor as  scroll
  for (let i = headingElements?.length; i >= 0; i--) {
    const singleHeading = headingElements[i];
    if (scrollTop > singleHeading?.offsetTop - 75) {
      const link = document?.querySelector<HTMLAnchorElement>(
        `h2[id="${singleHeading.id}"] a`,
      );
      if (link) {
        setActiveLink(singleHeading.id);
        link.classList.add("active-link");
        break;
      }
    }
  }
};

onMounted(() => {
  document.addEventListener("scroll", updateActiveLinkOnScroll);
});
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
