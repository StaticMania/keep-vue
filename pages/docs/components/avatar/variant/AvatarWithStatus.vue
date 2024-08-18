<script setup lang="ts">
import Avatar from "~/src/components/Avatar/Avatar.vue";
import AvatarBadge from "~/src/components/Avatar/AvatarBadge.vue";
import AvatarImage from "~/src/components/Avatar/AvatarImage.vue";
</script>

<template>
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
</template>
