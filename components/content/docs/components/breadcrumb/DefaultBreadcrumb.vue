<script lang="ts" setup>
import { Breadcrumb, BreadcrumbItem } from "~/src";
import { defaultBreadcrumbCode } from "./breadcrumbCode";
</script>

<template>
  <CodeHighlightWithPreview :code="defaultBreadcrumbCode">
    <Breadcrumb>
      <BreadcrumbItem>Overview</BreadcrumbItem>
      <BreadcrumbItem>
        <PhosphorIconCaretRight :size="18" color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhosphorIconCaretRight :size="18" color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhosphorIconCaretRight :size="18" color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
  </CodeHighlightWithPreview>
</template>
