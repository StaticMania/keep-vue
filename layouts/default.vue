<script setup lang="ts">
import HeaderComponent from "~/components/HeaderComponent.vue";
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <HeaderComponent />
  <main class="relative pt-20">
    <slot />
  </main>
  <Footer />
</template>

<style>
@import url("~/styles/main.css");
</style>
