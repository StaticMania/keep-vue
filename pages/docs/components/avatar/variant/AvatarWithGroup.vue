<script lang="ts" setup>
import Avatar from "~/src/components/Avatar/Avatar.vue";
import AvatarGroup from "~/src/components/Avatar/AvatarGroup.vue";
import AvatarImage from "~/src/components/Avatar/AvatarImage.vue";
</script>
<template>
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
</template>
