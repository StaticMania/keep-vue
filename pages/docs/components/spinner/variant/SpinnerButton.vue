<script lang="ts" setup>
import Button from "~/src/components/Button/Button.vue";
import Spinner from "~/src/components/Spinner/Spinner.vue";
</script>

<template>
  <div class="flex w-full items-end gap-3">
    <Button>
      <span class="pr-2">
        <Spinner color="gray" size="sm" />
      </span>
      Loading
    </Button>
    <Button variant="outline">
      <span class="pr-2">
        <Spinner color="gray" size="sm" />
      </span>
      Loading
    </Button>
  </div>
</template>
