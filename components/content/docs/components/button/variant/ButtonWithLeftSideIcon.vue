<script lang="ts" setup>
import { Button } from "~/src";
import { ButtonWithLeftSideIcon } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="ButtonWithLeftSideIcon">
    <div class="flex items-center justify-center gap-4">
      <Button color="warning">
        <PhosphorIconWarningCircle size="20" class="mr-1.5" />
        Report
      </Button>
      <Button color="success">
        <PhosphorIconCheckCircle size="20" class="mr-1.5" />
        Approve
      </Button>
      <Button color="error">
        <PhosphorIconTrash size="20" class="mr-1.5" />
        Delete
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
