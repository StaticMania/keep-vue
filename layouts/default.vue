<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Header />
  <main class="relative pt-20">
    <slot />
  </main>
  <Footer />
</template>

<style>
@import url("~/styles/main.css");
</style>
