<script lang="ts" setup>
import { Button, Toast } from "~/src";
</script>

<template>
  <Button @click="() => Toast('Keep React is Awesome')">Toast</Button>
</template>
