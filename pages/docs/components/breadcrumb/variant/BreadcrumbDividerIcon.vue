<script lang="ts" setup>
import { PhCaretDoubleRight, PhHouseLine } from "@phosphor-icons/vue";
import Breadcrumb from "~/src/components/Breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "~/src/components/Breadcrumb/BreadcrumbItem.vue";
</script>
<template>
  <Breadcrumb borderType="border-y">
    <BreadcrumbItem>
      <PhHouseLine :size="18" color="#455468" />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Overview
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Pools
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Token
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Colors
    </BreadcrumbItem>
  </Breadcrumb>
</template>
