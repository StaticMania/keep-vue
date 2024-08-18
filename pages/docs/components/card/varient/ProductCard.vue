<script lang="ts" setup>
import Button from "~/src/components/Button/Button.vue";
import Card from "~/src/components/Card/Card.vue";
import CardContent from "~/src/components/Card/CardContent.vue";
import CardDescription from "~/src/components/Card/CardDescription.vue";
import CardHeader from "~/src/components/Card/CardHeader.vue";
import CardTitle from "~/src/components/Card/CardTitle.vue";
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
