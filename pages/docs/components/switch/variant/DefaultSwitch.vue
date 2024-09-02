<script lang="ts" setup>
import { Switch } from "~/src";

const switchState = ref(false);

watch(switchState, () => [console.log(switchState.value)]);
</script>

<template>
  <div class="px-5 py-3">
    <Switch v-model:checked="switchState" />
  </div>
</template>
