<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Switch } from "~/src";
import { DisabledSwitchCode } from "./SwitchCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DisabledSwitchCode">
    <div class="flex items-center justify-center">
      <Switch disabled />
    </div>
  </CodeHighlightWithPreview>
</template>
