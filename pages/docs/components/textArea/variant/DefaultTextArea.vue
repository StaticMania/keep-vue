<script lang="ts" setup>
import { ref } from "vue";
import { Textarea } from "~/src";
const picked = ref("");
</script>

<template>
  <div class="p-2">
    <Textarea
      v-model="picked"
      placeholder="Write your message here."
      :rows="8" />
  </div>
</template>
