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
      <Label for="pk">Pakistan</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="bd" v-model="picked" name="country" value="bangladesh" />
      <Label for="bd">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio
        id="palestine"
        v-model="picked"
        name="country"
        value="palestine" />
      <Label for="palestine">Palestine</Label>
    </fieldset>
  </form>
</template>
`,
};

const radioVariantCode = {
  "RadioComponent.vue": `<script setup>
import { ref } from "vue";
import { Label, Radio } from "keep-vue";
const selected = ref("bangladesh");
console.log(selected)
</script>

<template>
   <form class="flex flex-col gap-2">
      <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
        Choose your favorite country
      </legend>
      <fieldset class="flex items-center gap-2">
        <Radio
          id="pakistan"
          v-model="selected"
          name="country"
          value="pakistan" />
        <Label for="pakistan">Pakistan</Label>
      </fieldset>
      <fieldset class="flex items-center gap-2">
        <Radio
          id="bangladesh"
          v-model="selected"
          name="country"
          variant="rounded"
          value="bangladesh" />
        <Label for="bangladesh">Bangladesh</Label>
      </fieldset>
      <fieldset class="flex items-center gap-2">
         <Radio
            id="palestine"
            v-model="selected"
            name="country"
            value="palestine" />
        <Label for="india">India</Label>
      </fieldset>
    </form>
</template>
`,
};

export { defaultRadioCode, radioVariantCode };
