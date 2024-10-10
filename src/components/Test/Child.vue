<script setup>
import { ref } from "vue";

const selected = ref("bangladesh");
console.log(selected);
</script>

<template>
  <form class="flex flex-col gap-2">
    <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
      Choose your favorite country
    </legend>
    <fieldset class="flex items-center gap-2">
      <Radio id="pakistan" v-model="selected" name="country" value="pakistan" />
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
        id="india"
        v-model="selected"
        name="country"
        variant="circle"
        value="india" />
      <Label for="india">India</Label>
    </fieldset>
  </form>
</template>
