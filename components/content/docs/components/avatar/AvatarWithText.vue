<script lang="ts" setup>
import { Avatar } from "~/src";
import { avatarWithImagesCode } from "./avatarCode";
</script>
<template>
  <CodeHighlightWithPreview :code="avatarWithImagesCode">
    <div class="flex items-center justify-center gap-3">
      <Avatar class="bg-metal-50 dark:bg-metal-800">
        <AvatarText>KV</AvatarText>
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
