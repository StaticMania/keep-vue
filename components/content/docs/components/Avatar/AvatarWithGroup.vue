<script lang="ts" setup>
import { Avatar, AvatarGroup, AvatarImage } from "~/src";
import { avatarGroupCode } from "./avatarCode";
</script>
<template>
  <CodeHighlightWithPreview :code="avatarGroupCode">
    <AvatarGroup>
      <Avatar class="size-14">
        <AvatarImage src="/images/avatar/avatar-1.png" />
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src="/images/avatar/avatar-2.png" />
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src="/images/avatar/avatar-3.png" />
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src="/images/avatar/avatar-4.png" />
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src="/images/avatar/avatar-5.png" />
      </Avatar>
    </AvatarGroup>
  </CodeHighlightWithPreview>
</template>
