<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

export interface Section {
  id: number;
  idName: string;
}

const route = useRoute();
const activeSection = ref<string>("");
const allSection = ref<Element[]>([]);
const tableOfContents = ref<HTMLUListElement | null>(null);

watch(
  () => route.path,
  () => {
    const toc = document.querySelector<HTMLUListElement>(
      "#table-of-contents + ul",
    );
    const sections: NodeListOf<Element> =
      document?.querySelectorAll(".section-title");

    if (sections !== null && sections.length > 0) {
      allSection.value = Array.from(sections);
    }
    tableOfContents.value = toc;
  },
);

const newIdArr: Section[] = allSection.value.map((section, index) => ({
  id: index + 1,
  idName: section.id,
}));

if (tableOfContents.value) {
  const LinkElements = tableOfContents.value.querySelectorAll("li a");

  LinkElements.forEach((link) => {
    const href = link.getAttribute("href");
    link.setAttribute("data-disable-nprogress", "true");

    if ("#" + activeSection.value === href) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

const innerHtml = tableOfContents.value?.innerHTML;

watchTriggerable(newIdArr, () => {
  const handleScroll = () => {
    const currentPosition = window?.scrollY;
    for (const section of newIdArr) {
      const element = document.getElementById(section.idName);

      if (element) {
        const offsetTop = ref(element.offsetTop);

        if (
          currentPosition >= offsetTop.value &&
          currentPosition < offsetTop.value + element.clientHeight
        ) {
          activeSection.value = section.idName;
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
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
              :dangerouslySetInnerHTML="{
                __html: innerHtml ?? '',
              }"
              class="border-l border-l-metal-100 dark:border-l-metal-800" />
          </nav>
        </div>
      </div>
    </aside>
  </div>
</template>
