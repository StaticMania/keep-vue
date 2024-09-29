<script setup lang="ts">
import { Avatar, AvatarText } from "~/src";
import { defaultAvatarCode } from "./avatarCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultAvatarCode">
    <Avatar>
      <AvatarText>KV</AvatarText>
    </Avatar>
  </CodeHighlightWithPreview>
</template>
