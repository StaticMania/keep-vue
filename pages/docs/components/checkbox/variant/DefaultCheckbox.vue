<script lang="ts" setup>
import Checkbox from "~/src/components/Checkbox/Checkbox.vue";
</script>
<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Keep Design System License</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="single" defaultChecked />
      <Label htmlFor="single">Single License</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="team" defaultChecked />
      <Label htmlFor="team">Team License</Label>
    </fieldset>
  </div>
</template>
