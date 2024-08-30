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
      <Radio variant="rounded" id="bd1" name="country" />
      <Label htmlFor="bd1">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio variant="square" id="usa1" name="country" />
      <Label htmlFor="usa1">United State</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio variant="circle" id="pk1" name="country" />
      <Label htmlFor="pk1">Pakistan</Label>
    </fieldset>
  </form>
</template>
