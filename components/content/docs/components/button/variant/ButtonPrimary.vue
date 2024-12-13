<script lang="ts" setup>
import { Button } from "~/src";
import { buttonPrimaryCode } from "../buttonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="buttonPrimaryCode">
    <div class="flex items-center justify-center gap-4">
      <Button color="primary">Login</Button>
    </div>
  </CodeHighlightWithPreview>
</template>
