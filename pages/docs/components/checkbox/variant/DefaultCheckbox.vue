<script lang="ts" setup>
import { Checkbox, Label } from "~/src";
</script>
<template>
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Keep Design System License</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="single" default-checked />
      <Label html-for="single">Single License</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox id="team" default-checked />
      <Label html-for="team">Team License</Label>
    </fieldset>
  </div>
</template>
