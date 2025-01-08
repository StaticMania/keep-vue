<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "~/src";
import { defaultAvatarCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultAvatarCode">
    <div class="flex items-center justify-center">
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarFallback>KV</AvatarFallback>
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
