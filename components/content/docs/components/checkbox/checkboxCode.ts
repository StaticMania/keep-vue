const defaultCheckboxCode = {
  "CheckboxComponent.vue": `<script setup>
import { Checkbox, Label } from 'keep-vue'
import { ref } from 'vue'

const statusOne = ref(true);
const statusTwo = ref(false);
console.log(statusOne.value, statusTwo.value)
</script>

<template>
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
</template>`,
};

const CheckboxVariantCode = {
  "CheckboxComponent.vue": `<script setup>
import { Checkbox, Label } from "keep-vue";

const statusOne = ref(false);
const statusTwo = ref(true);
const statusThree = ref(false);

console.log(statusOne.value, statusTwo.value, statusThree.value);

</script>

<template>
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
</template>
`,
};

export { CheckboxVariantCode, defaultCheckboxCode };
