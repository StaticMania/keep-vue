<script setup lang="ts">
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "~/src";
</script>

<template>
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
</template>
