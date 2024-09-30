<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";

import { Divider } from "~/src";
import { DividerColorCode } from "./dividerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DividerColorCode">
    <section class="space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
  </CodeHighlightWithPreview>
</template>
