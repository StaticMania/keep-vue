<script lang="ts" setup>
import { Breadcrumb, BreadcrumbItem } from "~/src";
import { BreadcrumbDividerIconCode } from "./breadcrumbCode";
</script>
<template>
  <CodeHighlightWithPreview :code="BreadcrumbDividerIconCode">
    <Breadcrumb border-type="border-y">
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
  </CodeHighlightWithPreview>
</template>
