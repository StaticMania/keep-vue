const defaultCheckboxCode = {
  "CheckboxComponent.vue": `<script setup>
import { ref } from "vue";
import { Checkbox, Label } from "keep-vue";

const statusOne = ref(false);
const statusTwo = ref(false);
console.log(statusOne.value, statusTwo.value);
</script>

<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Keep Design System License</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="single" v-model:checked="statusOne" default-checked />
      <Label html-for="single">Single License</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="team" v-model:checked="statusTwo" />
      <Label html-for="team">Team License</Label>
    </fieldset>
  </div>
</template>`,
};

const CheckboxVariantCode = {
  "CheckboxComponent.vue": `<script setup>
import { Checkbox, Label } from "keep-vue";
const statusOne = ref(false);
const statusTwo = ref(false);
const statusThree = ref(false);

console.log(statusOne.value, statusTwo.value, statusThree.value);

</script>

<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Checkbox Variant</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="default" v-model:checked="statusOne" />
      <Label html-for="default">Default</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox
        id="rounded"
        v-model:checked="statusTwo"
        variant="rounded"
        default-checked />
      <Label html-for="rounded">Rounded</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="circle" v-model:checked="statusThree" variant="circle" />
      <Label html-for="circle">Circle</Label>
    </fieldset>
  </div>
</template>
`,
};

export { CheckboxVariantCode, defaultCheckboxCode };
