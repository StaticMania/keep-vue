<script lang="ts" setup>
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/src";
</script>
<template>
  <Card>
    <CardHeader>
      <NuxtImg
        src="/images/keep-card.jpg"
        class="rounded-t-xl"
        alt="image"
        width="{600}"
        height="{300}" />
    </CardHeader>
    <CardContent class="space-y-3">
      <CardTitle>Lorem ipsum dolor sit</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        animi voluptas perspiciatis quidem esse!
      </CardDescription>
      <Button>Buy Now</Button>
    </CardContent>
  </Card>
</template>
