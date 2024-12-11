<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { AlertLink } from "~/src";
import { DefaultAlertCode } from "./AlertCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultAlertCode">
    <Alert class="justify-between">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Primary Alert</AlertTitle>
        <AlertDescription class="lg:line-clamp-1 2xl:line-clamp-none">
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/" class="lg:hidden 2xl:inline-flex">
          Learn More
        </AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  </CodeHighlightWithPreview>
</template>
