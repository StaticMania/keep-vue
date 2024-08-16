<script setup lang="ts">
import Badge from "~/src/components/Badge/Badge.vue";
</script>

<template>
  <div class="space-y-4 p-2">
    <div class="space-x-3">
      <Badge variant="base" color="primary">Primary</Badge>
      <Badge variant="base" color="secondary">Secondary</Badge>
      <Badge variant="base" color="success">Success</Badge>
      <Badge variant="base" color="warning">Warning</Badge>
      <Badge variant="base" color="error">Error</Badge>
    </div>
    <div class="space-x-3">
      <Badge variant="border" color="primary">Primary</Badge>
      <Badge variant="border" color="secondary">Secondary</Badge>
      <Badge variant="border" color="success">Success</Badge>
      <Badge variant="border" color="warning">Warning</Badge>
      <Badge variant="border" color="error">Error</Badge>
    </div>
    <div class="space-x-3">
      <Badge variant="background" color="primary">Primary</Badge>
      <Badge variant="background" color="secondary">Secondary</Badge>
      <Badge variant="background" color="success">Success</Badge>
      <Badge variant="background" color="warning">Warning</Badge>
      <Badge variant="background" color="error">Error</Badge>
    </div>
  </div>
</template>
