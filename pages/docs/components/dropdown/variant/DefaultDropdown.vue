<script lang="ts" setup>
import {
  Divider,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "~/src";
</script>

<template>
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
        <DropdownArrow />
      </DropdownContent>
    </Dropdown>
  </div>
</template>
