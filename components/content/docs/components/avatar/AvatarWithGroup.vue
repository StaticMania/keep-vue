<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "~/src";
import { avatarGroupCode } from "./avatarCode";
</script>
<template>
  <CodeHighlightWithPreview :code="avatarGroupCode">
    <div class="flex items-center justify-center">
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-1.png" />
          <AvatarFallback>KV</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-2.png" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-3.png" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-4.png" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-5.png" />
          <AvatarFallback>NC</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
