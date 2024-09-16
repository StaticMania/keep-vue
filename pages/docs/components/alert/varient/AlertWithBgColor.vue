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
  <div class="space-y-5">
    <Alert :with-bg="true" color="primary">
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
    <Alert :with-bg="true" color="secondary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Secondary Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="success">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="warning">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="error">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  </div>
</template>
