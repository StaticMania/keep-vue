<script setup lang="ts">
import { docsRoutes, quickAccessRoute, type RouterPath } from "~/Routes/routes";
import CommandDialog from "./Command/CommandDialog.vue";
import CommandEmpty from "./Command/CommandEmpty.vue";
import CommandGroup from "./Command/CommandGroup.vue";
import CommandInput from "./Command/CommandInput.vue";
import CommandItem from "./Command/CommandItem.vue";
import CommandList from "./Command/CommandList.vue";
import CommandSeparator from "./Command/CommandSeparator.vue";

//for handling search modal state
const isOpen = ref(false);

//navigation for search routes
function handleSelectLink(singleRoute: RouterPath) {
  if (singleRoute.external) window.open(singleRoute.href, "_blank");
  else navigateTo(singleRoute.href);
  isOpen.value = false;
}

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) isOpen.value = true;
});
</script>

<template>
  <div>
    <button
      @click="isOpen = true"
      class="rounded-lg border border-metal-100 bg-white p-2.5 outline-none transition-all duration-300 hover:bg-metal-25 focus:outline-none laptop:hidden dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
      <PhosphorIconMagnifyingGlass
        :size="22"
        class="fill-metal-500 dark:fill-metal-300" />
    </button>
    <button
      @click="isOpen = true"
      class="hidden w-[300px] items-center justify-between rounded-lg border border-metal-100 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-white laptop:flex dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
      <span
        class="flex items-center gap-2 text-body-4 font-normal text-metal-300 dark:text-white">
        <PhosphorIconMagnifyingGlass :size="22" />
        <span>Search component</span>
      </span>
      <span class="flex items-center text-body-4 font-medium text-metal-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="">
          <path
            d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        K
      </span>
    </button>

    <CommandDialog v-model:open="isOpen">
      <CommandInput placeholder="Type a command or search..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandList @escape-key-down="isOpen = false">
        <CommandGroup heading="Quick Access">
          <CommandItem
            v-for="route in quickAccessRoute"
            :key="route.id"
            :heading="route.name"
            :value="route.name"
            class="py-3"
            @select="handleSelectLink(route)">
            <PhosphorIconFile class="mr-2 h-5 w-5" />
            <span>{{ route.name }}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Components">
          <CommandItem
            v-for="route in docsRoutes"
            :key="route.name"
            :heading="route.name"
            :value="route.name"
            class="py-3"
            @select="handleSelectLink(route)">
            <PhosphorIconRadioButton class="mr-2 h-4 w-4" />
            <span>{{ route.name }}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  </div>
</template>
