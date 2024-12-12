<script lang="ts" setup>
import { Button } from "~/src";
import { ButtonWithRightSideIcon } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="ButtonWithRightSideIcon">
    <div class="flex items-center justify-center gap-4">
      <Button>
        Edit
        <PhosphorIconPencilSimpleLine size="20" class="ml-1.5" />
      </Button>
      <Button color="secondary">
        Share
        <PhosphorIconShareNetwork size="20" class="ml-1.5" />
      </Button>
      <Button color="error">
        Download
        <PhosphorIconDownloadSimple size="20" class="ml-1.5" />
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
