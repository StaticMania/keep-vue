<script lang="ts" setup>
import { PhChatText, PhGear, PhSignIn } from "@phosphor-icons/vue";
import { Button } from "~/src";
</script>
<template>
  <div class="flex h-24 flex-wrap items-center gap-2 p-4">
    <Button>
      <PhChatText size="20" class="mr-1.5" />
      Messages
    </Button>
    <Button>
      <PhGear size="20" class="mr-1.5" />
      Settings
    </Button>
    <Button>
      <PhSignIn size="20" class="mr-1.5" />
      Sign In
    </Button>
  </div>
</template>
