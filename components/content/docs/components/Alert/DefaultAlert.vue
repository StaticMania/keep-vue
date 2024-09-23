<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { DefaultAlertCode } from "./AlertCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultAlertCode">
    <Alert>
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Primary Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>

      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  </CodeHighlightWithPreview>
</template>
