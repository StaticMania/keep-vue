<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Card, CardContent, CardDescription, CardTitle } from "~/src";
import { DefaultCardCode } from "./cardCode";
</script>
<template>
  <CodeHighlightWithPreview :code="DefaultCardCode">
    <div class="flex items-center justify-center">
      <Card class="max-w-md">
        <CardContent>
          <CardTitle>Keep design system</CardTitle>
          <CardDescription>
            Component design systems can help developers to be more productive
            by providing them with a ready-made set of components to use.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  </CodeHighlightWithPreview>
</template>
