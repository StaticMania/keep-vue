<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from "~/src";
import { dropdownWithRadioCode } from "./dropdownCode";
</script>

<template>
  <CodeHighlightWithPreview class=" " :code="dropdownWithRadioCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          <DropdownGroup>
            <DropdownItem>
              <PhosphorIconUsers :size="20" />
              Profile
            </DropdownItem>

            <DropdownSub>
              <DropdownSubAction>
                <p className="flex items-center gap-2 text-body-4 font-medium ">
                  <PhosphorIconGlobe :size="20" />
                  Language
                </p>
              </DropdownSubAction>
              <DropdownSubContent>
                <DropdownItem>Bangla</DropdownItem>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>French</DropdownItem>
              </DropdownSubContent>
            </DropdownSub>
            <DropdownItem>
              <PhosphorIconGear :size="20" />
              Settings
            </DropdownItem>
            <DropdownItem>
              <PhosphorIconSignOut :size="20" />
              Logout
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
