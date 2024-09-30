<script lang="ts" setup>
import { ref } from "vue";
import { Checkbox, Label } from "~/src";

const statusOne = ref(false);
const statusTwo = ref(false);
</script>
<template>
  {{ statusOne }}
  <div class="space-y-3 p-3">
    <p class="text-body-3 font-normal">Keep Design System License</p>
    <fieldset class="flex items-center gap-2">
      <Checkbox v-model:checked="statusOne" id="single" default-checked />
      <Label html-for="single">Single License</Label>
    </fieldset>
    <fieldset class="flex items-center gap-2">
      <Checkbox v-model:checked="statusTwo" id="team" />
      <Label html-for="team">Team License</Label>
    </fieldset>
  </div>
</template>
