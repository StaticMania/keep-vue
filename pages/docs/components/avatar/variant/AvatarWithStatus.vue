<script setup lang="ts">
import { Avatar, AvatarBadge, AvatarImage } from "~/src";
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
