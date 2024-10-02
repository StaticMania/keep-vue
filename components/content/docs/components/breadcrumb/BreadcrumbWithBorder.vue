<script lang="ts" setup>
import { Breadcrumb, BreadcrumbItem } from "~/src";
import { breadcrumbWithBorderCode } from "./breadcrumbCode";
</script>
<template>
  <CodeHighlightWithPreview :code="breadcrumbWithBorderCode">
    <div class="space-y-3">
      <Breadcrumb border-type="border-xy">
        <BreadcrumbItem>
          <PhosphorIconHouseLine :size="18" color="#455468" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <PhosphorIconCaretRight :size="18" color="#455468" />
          Overview
        </BreadcrumbItem>
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
      <Breadcrumb border-type="border-y">
        <BreadcrumbItem>
          <PhosphorIconHouseLine :size="18" color="#455468" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <PhosphorIconCaretRight :size="18" color="#455468" />
          Overview
        </BreadcrumbItem>
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
    </div>
  </CodeHighlightWithPreview>
</template>
