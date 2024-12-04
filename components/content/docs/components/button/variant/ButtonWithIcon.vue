<script lang="ts" setup>
import { Button } from "~/src";
import { buttonWithIconCode } from "../buttonCode";
</script>
<template>
  <CodeHighlightWithPreview :code="buttonWithIconCode">
    <div class="flex items-center justify-center gap-4">
      <Button>
        <PhosphorIconChatText size="20" class="mr-1.5" />
        Messages
      </Button>
      <Button>
        <PhosphorIconGear size="20" class="mr-1.5" />
        Settings
      </Button>
      <Button>
        <PhosphorIconSignIn size="20" class="mr-1.5" />
        Sign In
      </Button>
    </div>
  </CodeHighlightWithPreview>
</template>
