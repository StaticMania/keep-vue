<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Divider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "~/src";
import { DropdownWithoutArrowIconCode } from "./dropdownCode";
</script>

<template>
  <CodeHighlightWithPreview
    class="bg-metal-50 dark:bg-[#0D1015]"
    :code="DropdownWithoutArrowIconCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownList>
            <DropdownItem>Contacts</DropdownItem>
            <DropdownItem>Phone</DropdownItem>
            <DropdownItem>Statistics</DropdownItem>
            <Divider />
            <DropdownItem>Rename</DropdownItem>
            <DropdownItem>Duplicate</DropdownItem>
            <Divider />
            <DropdownItem>Account</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownList>
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
