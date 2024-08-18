<script lang="ts" setup>
import { PhCaretRight, PhHouseLine } from "@phosphor-icons/vue";
import Breadcrumb from "~/src/components/Breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "~/src/components/Breadcrumb/BreadcrumbItem.vue";
</script>
<template>
  <div class="space-y-3">
    <Breadcrumb borderType="border-xy">
      <BreadcrumbItem>
        <PhHouseLine :size="18" color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Overview
      </BreadcrumbItem>
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
    <Breadcrumb borderType="border-y">
      <BreadcrumbItem>
        <PhHouseLine :size="18" color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Overview
      </BreadcrumbItem>
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
  </div>
</template>
