const defaultRadioCode = {
  "RadioComponent.vue": `<script setup>
import {ref} from "vue"
import { Label, Radio } from "keep-vue";
const picked = ref("bangladesh");
console.log(picked);
</script>

<template>
  <form class="flex flex-col gap-2">
    <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
      Choose your favorite country
    </legend>
    <fieldset class="flex items-center gap-2">
      <Radio id="pk" v-model="picked" name="country" value="pakistan" />
      <Label html-for="pk">Pakistan</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="bd" v-model="picked" name="country" value="bangladesh" />
      <Label html-for="bd">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="india" v-model="picked" name="country" value="india" />
      <Label html-for="in">India</Label>
    </fieldset>
  </form>
</template>
`,
};

const radioVariantCode = {
  "RadioComponent.vue": `<script setup>
import { ref } from "vue";
import { Label, Radio } from "keep-vue";
const picked = ref("bangladesh");
console.log(picked)
</script>

<template>
  <form class="flex flex-col gap-2">
    <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
      Choose your favorite country
    </legend>
    <fieldset class="flex items-center gap-2">
      <Radio
        id="pk"
        v-model="picked"
        variant="circle"
        name="country"
        value="pakistan" />
      <Label html-for="pk">Pakistan</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio
        id="bd"
        v-model="picked"
        variant="rounded"
        name="country"
        value="bangladesh" />
      <Label html-for="bd">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio
        id="india"
        v-model="picked"
        variant="square"
        name="country"
        value="india" />
      <Label html-for="in">India</Label>
    </fieldset>
  </form>
</template>
`,
};

export { defaultRadioCode, radioVariantCode };
