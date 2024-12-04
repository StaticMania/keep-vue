<script lang="ts" setup>
import { Avatar, AvatarImage } from "~/src";
import { avatarWithImagesCode } from "./avatarCode";
</script>
<template>
  <CodeHighlightWithPreview :code="avatarWithImagesCode">
    <div class="flex items-center justify-center gap-3">
      <Avatar>
        <AvatarImage />
      </Avatar>
      <Avatar>
        <AvatarImage src="/images/avatar/avatar-4.png" />
      </Avatar>
    </div>
  </CodeHighlightWithPreview>
</template>
