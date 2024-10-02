<script lang="ts" setup>
import { ref, watch } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Switch } from "~/src";
import { SwitchWithIconCode } from "./SwitchCode";

const switchState = ref(false);
watch(switchState, () => [console.log(switchState.value)]);
</script>

<template>
  <CodeHighlightWithPreview :code="SwitchWithIconCode">
    <div class="px-5 py-3">
      <Switch v-model:checked="switchState" variant="icon" />
    </div>
  </CodeHighlightWithPreview>
</template>
