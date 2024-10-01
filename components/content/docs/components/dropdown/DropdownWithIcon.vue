<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "~/src";
import { DropdownWithIconCode } from "./dropdownCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DropdownWithIconCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownList>
            <DropdownItem>
              <PhUsers :size="20" />
              Contacts
            </DropdownItem>
            <DropdownItem>
              <PhPhone :size="20" />
              Phone
            </DropdownItem>
            <DropdownItem>
              <PhChartPieSlice :size="20" />
              Statistics
            </DropdownItem>
            <Divider />
            <DropdownItem>
              <PhPen :size="20" />
              Rename
            </DropdownItem>
            <DropdownItem>
              <PhCopy :size="20" />
              Duplicate
            </DropdownItem>
            <Divider />
            <DropdownItem>
              <PhUserCircle :size="20" />
              Account
            </DropdownItem>
            <DropdownItem>
              <PhSignOut :size="20" />
              Logout
            </DropdownItem>
          </DropdownList>
          <DropdownArrow />
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
