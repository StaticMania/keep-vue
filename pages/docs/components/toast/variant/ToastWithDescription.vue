<script lang="ts" setup>
import { Toast } from "~/src";
</script>

<template>
  <Button
    @click="
      () =>
        Toast('Keep Vue is Awesome', {
          description:
            'Elevate your web projects with Keep Vue 40+ customizable components.',
        })
    ">
    Toast
  </Button>
</template>
