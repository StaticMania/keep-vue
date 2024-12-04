<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";

import { Divider } from "~/src";
import { DividerColorCode } from "./dividerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DividerColorCode">
    <div class="flex items-center justify-center">
      <section class="w-full space-y-4">
        <Divider color="primary" />
        <Divider color="secondary" />
        <Divider color="success" />
        <Divider color="warning" />
        <Divider color="error" />
      </section>
    </div>
  </CodeHighlightWithPreview>
</template>
