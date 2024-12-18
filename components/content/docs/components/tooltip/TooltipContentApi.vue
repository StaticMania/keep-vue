<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";
import { tooltipContentApi } from "./tooltipContentApi";
</script>

<template>
  <ComponentApiTable :data="tooltipContentApi" />
</template>
