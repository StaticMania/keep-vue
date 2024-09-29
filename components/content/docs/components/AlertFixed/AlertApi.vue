<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";
import { alertApiData } from "./alertApi";
</script>

<template>
  <ComponentApiTable :data="alertApiData"></ComponentApiTable>
</template>
