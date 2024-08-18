<script lang="ts" setup>
import Avatar from "~/src/components/Avatar/Avatar.vue";
import AvatarGroup from "~/src/components/Avatar/AvatarGroup.vue";
import AvatarImage from "~/src/components/Avatar/AvatarImage.vue";
import Card from "~/src/components/Card/Card.vue";
import CardContent from "~/src/components/Card/CardContent.vue";
import CardDescription from "~/src/components/Card/CardDescription.vue";
import CardTitle from "~/src/components/Card/CardTitle.vue";
</script>
<template>
  <Card class="max-w-md">
    <CardContent>
      <CardTitle>Our Contributors</CardTitle>
      <CardDescription>
        They help us to grow up the keep react component library
      </CardDescription>
      <AvatarGroup class="mt-3">
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
    </CardContent>
  </Card>
</template>
