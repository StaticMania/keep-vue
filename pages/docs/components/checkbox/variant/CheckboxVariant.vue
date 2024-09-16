<script lang="ts" setup>
import { Checkbox, Label } from "~/src";
</script>
<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Checkbox Variant</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="default" default-checked />
      <Label html-for="default">Default</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="rounded" variant="rounded" default-checked />
      <Label html-for="rounded">Rounded</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="circle" variant="circle" default-checked />
      <Label html-for="circle">Circle</Label>
    </fieldset>
  </div>
</template>
