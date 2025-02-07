<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Divider,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
} from "~/src";
import { DropdownWithArrowIconCode } from "./dropdownCode";
</script>

<template>
  <CodeHighlightWithPreview
    class="bg-metal-50 dark:bg-[#0D1015]"
    :code="DropdownWithArrowIconCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent class="border-0">
          <DropdownGroup>
            <DropdownItem>Contacts</DropdownItem>
            <DropdownItem>Phone</DropdownItem>
            <DropdownItem>Statistics</DropdownItem>
            <Divider />
            <DropdownItem>Rename</DropdownItem>
            <DropdownItem>Duplicate</DropdownItem>
            <Divider />
            <DropdownItem>Account</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownGroup>
          <DropdownArrow />
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
