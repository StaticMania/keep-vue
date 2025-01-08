const DefaultSwitchCode = {
  "SwitchComponent.vue": `<script setup>
import { ref, watch } from "vue";
import { Switch } from "keep-vue";

const switchState = ref(false);
watch(switchState, () => [console.log(switchState.value)]);
</script>

<template>
  <div class="px-5 py-3">
    <Switch v-model:checked="switchState" />
  </div>
</template>`,
};

const DisabledSwitchCode = {
  "SwitchComponent.vue": `<script setup>
import { Switch } from "keep-vue";
</script>

<template>
  <div class="px-5 py-3">
    <Switch disabled />
  </div>
</template>`,
};

const SwitchWithIconCode = {
  "SwitchComponent.vue": `<script setup>
import { ref, watch } from "vue";
import { Switch } from "keep-vue";

const switchState = ref(false);
watch(switchState, () => [console.log(switchState.value)]);
</script>

<template>
  <div class="px-5 py-3">
    <Switch v-model:checked="switchState" variant="icon" />
  </div>
</template>`,
};

export { DefaultSwitchCode, DisabledSwitchCode, SwitchWithIconCode };
