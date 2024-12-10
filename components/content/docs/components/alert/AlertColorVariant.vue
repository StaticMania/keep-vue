<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "~/src";
import { AlertColorVariantCode } from "./AlertCode";
</script>

<template>
  <CodeHighlightWithPreview :code="AlertColorVariantCode">
    <div class="space-y-5">
      <Alert color="primary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Primary Alert</AlertTitle>
          <AlertDescription class="lg:line-clamp-1 2xl:line-clamp-none">
            A Short description followed by two actions items.
          </AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="/" class="lg:hidden 2xl:inline-flex">
            Learn More
          </AlertLink>
          <AlertDismiss />
        </AlertContainer>
      </Alert>
      <Alert color="secondary">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Secondary Alert</AlertTitle>
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

      <Alert color="success">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Success Alert</AlertTitle>
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

      <Alert color="warning">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Warning Alert</AlertTitle>
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

      <Alert color="error">
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Error Alert</AlertTitle>
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
    </div>
  </CodeHighlightWithPreview>
</template>
