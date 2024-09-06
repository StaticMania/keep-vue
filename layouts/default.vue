<script setup lang="ts">
import { Toaster } from "vue-sonner";
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Toaster />
  <Navbar />
  <main class="relative pt-20">
    <slot />
  </main>
  <Footer />
</template>

<style>
@import url("~/styles/main.css");
</style>
