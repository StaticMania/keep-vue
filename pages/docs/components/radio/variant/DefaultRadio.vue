<script lang="ts" setup>
import { Label, Radio } from "~/src";
</script>

<template>
  <form class="flex flex-col gap-2">
    <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
      Choose your favorite country
    </legend>
    <fieldset class="flex items-center gap-2">
      <Radio id="bd" name="country" />
      <Label html-for="bd">Bangladesh</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="usa" name="country" />
      <Label html-for="usa">United State</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Radio id="pk" name="country" />
      <Label html-for="pk">Pakistan</Label>
    </fieldset>
  </form>
</template>
