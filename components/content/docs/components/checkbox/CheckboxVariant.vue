<script lang="ts" setup>
import { Checkbox, Label } from "~/src";
import { CheckboxVariantCode } from "./checkboxCode";
const statusOne = ref(false);
const statusTwo = ref(true);
const statusThree = ref(false);
</script>
<template>
  <CodeHighlightWithPreview :code="CheckboxVariantCode">
    <div class="flex items-center justify-center">
      <div class="space-y-3 p-3">
        <p class="text-body-3 font-normal dark:text-metal-300">
          Checkbox Variant
        </p>
        <fieldset class="flex items-center gap-2">
          <Checkbox
            id="default"
            :checked="statusOne"
            @update:checked="(value) => (statusOne = value)" />
          <Label for="default">Default</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Checkbox
            id="rounded"
            :checked="statusTwo"
            variant="rounded"
            @update:checked="(value) => (statusTwo = value)" />
          <Label for="rounded">Rounded</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Checkbox
            id="circle"
            :checked="statusThree"
            variant="circle"
            @update:checked="(value) => (statusThree = value)" />
          <Label for="circle">Circle</Label>
        </fieldset>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
