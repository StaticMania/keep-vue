<script lang="ts" setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import { Breadcrumb, BreadcrumbItem } from "~/src";
import { defaultBreadcrumbCode } from "./breadcrumbCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultBreadcrumbCode">
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
  </CodeHighlightWithPreview>
</template>
