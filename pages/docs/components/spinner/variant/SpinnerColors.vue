<script lang="ts" setup>
import Spinner from "~/src/components/Spinner/Spinner.vue";
</script>

<template>
  <div class="my-5 flex gap-3">
    <Spinner color="failure" size="lg" />
    <Spinner color="gray" size="lg" />
    <Spinner color="info" size="lg" />
    <Spinner color="pink" size="lg" />
    <Spinner color="purple" size="lg" />
    <Spinner color="success" size="lg" />
    <Spinner color="warning" size="lg" />
  </div>
</template>
