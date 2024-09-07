<script lang="ts" setup>
import { Toast } from "~/src";
</script>

<template>
  <Button
    @click="
      () =>
        Toast('Keep Vue is Awesome', {
          action: {
            label: 'Action',
            onClick: () => console.log('Action is pressed'),
          },
        })
    ">
    Toast
  </Button>
</template>
