<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "~/src";
import { avatarWithStatusCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="avatarWithStatusCode">
    <div class="flex items-center justify-center gap-3">
      <div class="relative">
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-3.png" />
          <AvatarFallback>KV</AvatarFallback>
        </Avatar>

        <div
          class="absolute bottom-0 right-0 size-3 rounded-full bg-success-500" />
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
