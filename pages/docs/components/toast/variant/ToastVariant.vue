<script lang="ts" setup>
import { Button, Toast } from "~/src";
</script>

<template>
  <div class="flex items-center gap-3">
    <Button @click="() => Toast.info('Keep Vue is Awesome')">Info</Button>
    <Button @click="() => Toast.success('Keep Vue is Awesome')">Success</Button>
    <Button @click="() => Toast.warning('Keep Vue is Awesome')">Warning</Button>
    <Button @click="() => Toast.error('Keep Vue is Awesome')">Error</Button>
  </div>
</template>
