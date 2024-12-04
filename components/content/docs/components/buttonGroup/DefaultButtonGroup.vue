<script lang="ts" setup>
import { ButtonGroup } from "~/src";
import { defaultButtonGroupCode } from "./buttonGroupCode";
</script>
<template>
  <CodeHighlightWithPreview :code="defaultButtonGroupCode">
    <div class="flex items-center justify-center">
      <ButtonGroup>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
      </ButtonGroup>
    </div>
  </CodeHighlightWithPreview>
</template>
