<script setup lang="ts">
import { onMounted, ref } from "vue";
import { docsRoutes, quickAccessRoute, type RouterPath } from "~/Routes/routes";
import { Modal } from "~/src";

interface SearchBarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const props = defineProps<SearchBarProps>();
const query = ref("");
const data = ref<RouterPath[]>(docsRoutes.value);

const isPending = ref(false);
const inputRef = ref<HTMLInputElement>();

const filteredData = computed(() => {
  if (query.value.trim() === "") {
    return docsRoutes.value;
  } else {
    return docsRoutes.value.filter((item) =>
      item.name.toLowerCase().includes(query.value.toLowerCase()),
    );
  }
});

if (props.isOpen !== true) {
  const { Meta_K, Ctrl_K } = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        props.setIsOpen(true);
        e.preventDefault();
      }
    },
  });

  watch([Meta_K, Ctrl_K], (v) => {
    if (v[0] || v[1]) {
      props.setIsOpen(true);
    }
  });
}

onMounted(() => {
  inputRef.value?.focus();
});
</script>

<template>
  <Modal :open="props.isOpen">
    <ModalContent
      class="block w-[22rem] rounded-lg bg-white md:w-[35rem] laptop:p-8 dark:bg-metal-900">
      <ModalClose
        class="absolute right-0 top-1 stroke-black p-1 outline-none lg:p-2"
        @click="setIsOpen(false)" />

      <VisuallyHidden>
        <ModalTitle>Update Modal Status</ModalTitle>
      </VisuallyHidden>
      <ModalDescription>
        <fieldset class="relative">
          <Input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="Search Component"
            class="ps-11 focus-visible:ring-metal-25" />
          <InputIcon>
            <PhMagnifyingGlass :size="19" color="#AFBACA" />
          </InputIcon>
        </fieldset>

        <div id="search" class="mt-2 max-h-[300px] overflow-y-auto">
          <!-- initial -->
          <div v-if="!query.length">
            <p
              class="my-2 text-body-4 font-normal text-metal-400 dark:text-metal-300">
              Quick Access
            </p>
            <ul>
              <li
                v-for="route in quickAccessRoute"
                :key="route.id"
                class="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800">
                <NuxtLink
                  :to="route.href"
                  :target="route.target"
                  class="flex items-center gap-1">
                  <PhFile :size="14" />
                  {{ route.name }}
                </NuxtLink>
              </li>
            </ul>
            <p
              class="my-2 text-body-4 font-normal text-metal-400 dark:text-metal-300">
              Components
            </p>
            <ul>
              <li
                v-for="route in data"
                :key="route.id"
                class="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800"
                @click="setIsOpen(false)">
                <NuxtLink
                  :to="route.href"
                  :target="route.target"
                  class="flex items-center gap-1">
                  <PhRadioButton :size="14" />
                  {{ route.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Filtered Data Section -->
          <div v-if="query.length">
            <p
              class="my-2 text-body-4 font-normal text-metal-400 dark:text-metal-300">
              Components
            </p>
            <p
              v-if="isPending"
              class="text-left text-body-4 font-normal text-metal-600">
              Loading...
            </p>
            <ul v-else-if="filteredData.length > 0">
              <li
                v-for="route in filteredData"
                :key="route.id"
                class="rounded-md p-2 text-body-4 font-normal text-metal-900 transition-all duration-300 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800">
                <NuxtLink :to="route.href" class="flex items-center gap-1">
                  <PhRadioButton :size="14" />
                  {{ route.name }}
                </NuxtLink>
              </li>
            </ul>
            <p v-else class="text-left text-body-4 font-normal text-metal-600">
              No results found.
            </p>
          </div>
        </div>
      </ModalDescription>
    </ModalContent>
  </Modal>
</template>
