<script setup lang="ts">
import Alert from "~/src/components/Alert/Alert.vue";
import AlertContainer from "~/src/components/Alert/AlertContainer.vue";
import AlertDescription from "~/src/components/Alert/AlertDescription.vue";
import AlertIcon from "~/src/components/Alert/AlertIcon.vue";
import AlertTitle from "~/src/components/Alert/AlertTitle.vue";
import AlertWithDismissIcon from "./AlertWithDismissIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Alert - Keep Vue",
  description:
    "The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <!-- alert default -->
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
        <AlertDismiss></AlertDismiss>
      </AlertContainer>
    </Alert>

    <!-- alert dismiss -->
    <AlertWithDismissIcon />
  </DocsContentLayout>
</template>
