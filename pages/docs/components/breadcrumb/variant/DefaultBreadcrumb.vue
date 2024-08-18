<script lang="ts" setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import Breadcrumb from "~/src/components/Breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "~/src/components/Breadcrumb/BreadcrumbItem.vue";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem>Overview</BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Pools
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Token
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Colors
    </BreadcrumbItem>
  </Breadcrumb>
</template>
