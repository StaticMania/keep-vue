<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from "~/src";
import { dropdownWithRadioCode } from "./dropdownCode";

const role = ref("softwareDeveloper");
</script>

<template>
  <CodeHighlightWithPreview class=" " :code="dropdownWithRadioCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction as-child>
          <Button>Choose a role</Button>
        </DropdownAction>
        <DropdownContent align="center">
          <DropdownLabel>Select a role</DropdownLabel>

          <DropdownRadioGroup v-model="role">
            <DropdownRadioItem value="softwareDeveloper">
              Software Developer
            </DropdownRadioItem>
            <DropdownRadioItem value="mlEngineer">
              ML Engineer
            </DropdownRadioItem>
            <DropdownRadioItem value=" dataScientist">
              Data Scientist
            </DropdownRadioItem>
            <DropdownRadioItem value="productManager">
              Product Manager
            </DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  </CodeHighlightWithPreview>
</template>
