<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";

import { Divider } from "~/src";
import { DividerSizeCode } from "./dividerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DividerSizeCode">
    <div class="flex items-center justify-center">
      <section class="w-full space-y-4">
        <Divider size="sm" />
        <Divider size="md" />
        <Divider size="lg" />
        <Divider size="xl" />
        <Divider size="2xl" />
      </section>
    </div>
  </CodeHighlightWithPreview>
</template>
