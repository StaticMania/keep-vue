<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from "radix-vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownLabel,
} from "~/src";
import { dropdownWithCheckboxCode } from "./dropdownCode";
type Checked = DropdownMenuCheckboxItemProps["checked"];
const selectReact = ref<Checked>(true);
const selectVue = ref<Checked>(false);
const selectAngular = ref<Checked>(false);
</script>

<template>
  <CodeHighlightWithPreview class=" " :code="dropdownWithCheckboxCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Select a framework</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownLabel>Select a framework</DropdownLabel>
          <DropdownArrow />
          <DropdownCheckboxItem v-model:checked="selectReact">
            ReactJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem v-model:checked="selectVue">
            VueJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem v-model:checked="selectAngular">
            Angular JS
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
