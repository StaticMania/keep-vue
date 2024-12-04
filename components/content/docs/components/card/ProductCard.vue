<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/src";
import { ProductCardCode } from "./cardCode";
</script>
<template>
  <CodeHighlightWithPreview :code="ProductCardCode">
    <div class="flex items-center justify-center">
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
    </div>
  </CodeHighlightWithPreview>
</template>
