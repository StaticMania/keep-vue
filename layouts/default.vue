<script setup lang="ts"></script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Navbar />
  <main class="relative pt-20">
    <slot />
  </main>
  <Footer />
</template>

<style>
@import url("~/styles/main.css");
</style>
