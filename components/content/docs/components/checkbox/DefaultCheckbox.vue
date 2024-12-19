<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Checkbox, Label } from "~/src";
import { defaultCheckboxCode } from "./checkboxCode";

const statusOne = ref(true);
const statusTwo = ref(false);
</script>
<template>
  <CodeHighlightWithPreview :code="defaultCheckboxCode">
    <div class="flex items-center justify-center">
      <div class="space-y-3 p-3">
        <p class="text-body-3 font-normal dark:text-metal-300">
          Keep Design System License
        </p>
        <fieldset class="flex items-center gap-2">
          <Checkbox
            id="single"
            :checked="statusOne"
            @update:checked="(value) => (statusOne = value)" />
          <Label for="single">Single License</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Checkbox
            id="team"
            :checked="statusTwo"
            @update:checked="(value) => (statusTwo = value)" />
          <Label for="team">Team License</Label>
        </fieldset>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
