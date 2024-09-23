export const DefaultAlertCode = {
  "AlertComponent.Vue": `  
  <script setup>
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "keep-vue";
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
  `,
};
