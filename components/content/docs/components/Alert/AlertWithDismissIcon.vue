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

const showAlert = ref(false);
const onDismiss = () => {
  showAlert.value = true;
};
</script>

<template>
  <Alert :dismiss="showAlert">
    <AlertContainer>
      <AlertIcon />
      <AlertTitle>Alert here</AlertTitle>
      <AlertDescription>
        A short description followed by two actions items.
      </AlertDescription>
    </AlertContainer>
    <AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss @dismiss="onDismiss" />
    </AlertContainer>
  </Alert>
</template>
