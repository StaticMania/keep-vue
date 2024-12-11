const defaultAvatarCode = {
  "AvatarComponent.vue": `  
    <script setup>
import { Avatar, AvatarFallback, AvatarImage  } from "keep-vue";
</script>

<template>
   <Avatar>
     <AvatarImage src="/images/avatar/avatar-4.png" />
      <AvatarFallback>KV</AvatarFallback>
   </Avatar>
</template>
    `,
};

const avatarWithStatusCode = {
  "AvatarComponent.vue": `  
    <script setup>
import { Avatar, AvatarFallback, AvatarImage } from "keep-vue";
</script>

<template>
    <div class="relative">
        <Avatar>
          <AvatarImage src="/images/avatar/avatar-3.png" />
          <AvatarFallback>KV</AvatarFallback>
        </Avatar>
        <div
          class="absolute bottom-0 right-0 size-3 rounded-full bg-success-500" />
      </div>
</template>`,
};

const avatarGroupCode = {
  "AvatarComponent.vue": `<script setup>
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from 'keep-vue'
</script>

<template>
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
</template>`,
};

export { avatarGroupCode, avatarWithStatusCode, defaultAvatarCode };
