<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/src";
import { CardWithAvatarCode } from "./cardCode";
</script>
<template>
  <CodeHighlightWithPreview :code="CardWithAvatarCode">
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
  </CodeHighlightWithPreview>
</template>
