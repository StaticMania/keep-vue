<script lang="ts" setup>
import Label from "~/src/components/Label/Label.vue";
import Radio from "~/src/components/Radio/Radio.vue";
</script>

<template>
  <form class="flex flex-col gap-2">
    <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
      Choose your favorite country
    </legend>
    <fieldset class="flex items-center gap-2">
      <Radio id="bd1" variant="rounded" name="country" />
      <Label html-for="bd1">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="usa1" variant="square" name="country" />
      <Label html-for="usa1">United State</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="pk1" variant="circle" name="country" />
      <Label html-for="pk1">Pakistan</Label>
    </fieldset>
  </form>
</template>
