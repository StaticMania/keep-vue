<script setup lang="ts">
import { Avatar } from "~/src";
import { defaultAvatarCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultAvatarCode">
    <div class="flex items-center justify-center">
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
