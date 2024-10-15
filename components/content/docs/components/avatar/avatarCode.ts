const defaultAvatarCode = {
  "AvatarComponent.Vue": `  
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
  "AvatarComponent.Vue": `  
    <script setup>
import { Avatar, AvatarImage } from "keep-vue";
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
    `,
};

const avatarWithStatusCode = {
  "AvatarComponent.Vue": `  
    <script setup>
import { Avatar, AvatarBadge, AvatarImage } from "keep-vue";
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
    `,
};

const avatarGroupCode = {
  "AvatarComponent.Vue": `<script setup>
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
</template>



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
    `,
};

export {
  avatarGroupCode,
  avatarWithImagesCode,
  avatarWithStatusCode,
  defaultAvatarCode,
};
