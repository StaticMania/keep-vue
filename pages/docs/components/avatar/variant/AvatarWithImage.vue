<script lang="ts" setup>
import Avatar from "~/src/components/Avatar/Avatar.vue";
import AvatarImage from "~/src/components/Avatar/AvatarImage.vue";
</script>
<template>
  <div class="flex items-center gap-3">
    <Avatar>
      <AvatarImage />
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar/avatar-4.png" />
    </Avatar>
  </div>
</template>
