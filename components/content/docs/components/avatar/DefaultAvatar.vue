<script setup lang="ts">
import { Avatar, AvatarText } from "~/src";
import { defaultAvatarCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultAvatarCode">
    <div class="flex items-center justify-center">
      <Avatar>
        <AvatarText>KV</AvatarText>
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
