const defaultAvatarCode = {
  "AvatarComponent.vue": `  
    <script setup>
import { Avatar, AvatarText } from "keep-vue";
</script>

<template>
  <Avatar>
    <AvatarText>KV</AvatarText>
  </Avatar>
</template>
    `,
};

const avatarWithImagesCode = {
  "AvatarComponent.vue": `  
    <script setup>
import { Avatar, AvatarImage } from "keep-vue";
</script>
<template>
    <Avatar>
      <AvatarImage />
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar/avatar-4.png" />
    </Avatar>
</template>`,
};

const avatarWithStatusCode = {
  "AvatarComponent.vue": `  
    <script setup>
import { Avatar, AvatarBadge, AvatarImage } from "keep-vue";
</script>

<template>
    <Avatar>
      <AvatarImage />
      <AvatarBadge />
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar/avatar-4.png" />
      <AvatarBadge />
    </Avatar>
</template>`,
};

const avatarGroupCode = {
  "AvatarComponent.vue": `<script setup>
import { Avatar, AvatarGroup, AvatarImage } from 'keep-vue'
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
</template>`,
};

export {
  avatarGroupCode,
  avatarWithImagesCode,
  avatarWithStatusCode,
  defaultAvatarCode,
};
