<script lang="ts" setup>
import Checkbox from "~/src/components/Checkbox/Checkbox.vue";
</script>
<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Checkbox Variant</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="default" defaultChecked />
      <Label htmlFor="default">Default</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="rounded" variant="rounded" defaultChecked />
      <Label htmlFor="rounded">Rounded</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="circle" variant="circle" defaultChecked />
      <Label htmlFor="circle">Circle</Label>
    </fieldset>
  </div>
</template>
