<script setup lang="ts">
import { Avatar, AvatarBadge, AvatarImage } from "~/src";
import { avatarWithStatusCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="avatarWithStatusCode">
    <div class="flex items-center gap-3">
      <Avatar>
        <AvatarImage />
        <AvatarBadge />
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
        <AvatarBadge />
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
