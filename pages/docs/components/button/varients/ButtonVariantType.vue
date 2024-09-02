<script lang="ts" setup>
import { Button } from "~/src";
</script>
<template>
  <div class="flex h-32 flex-wrap items-center gap-2 p-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button color="primary" variant="outline">Button</Button>
      <Button color="secondary" variant="outline">Button</Button>
      <Button color="success" variant="outline">Button</Button>
      <Button color="warning" variant="outline">Button</Button>
      <Button color="error" variant="outline">Button</Button>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <Button color="primary" variant="link">Button</Button>
      <Button color="secondary" variant="link">Button</Button>
      <Button color="success" variant="link">Button</Button>
      <Button color="warning" variant="link">Button</Button>
      <Button color="error" variant="link">Button</Button>
    </div>
  </div>
</template>
