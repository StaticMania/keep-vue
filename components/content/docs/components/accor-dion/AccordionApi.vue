<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";
import { accordionApiData } from "./accordionApi";
</script>

<template>
  <ComponentApiTable :data="accordionApiData"></ComponentApiTable>
</template>
