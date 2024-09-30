<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Divider } from "~/src";
import { DividerAlignCode } from "./dividerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DividerAlignCode">
    <section class="space-y-3">
      <Divider variant="start">Left Align</Divider>
      <Divider variant="center">Center Align</Divider>
      <Divider variant="end">Right Align</Divider>
    </section>
  </CodeHighlightWithPreview>
</template>
