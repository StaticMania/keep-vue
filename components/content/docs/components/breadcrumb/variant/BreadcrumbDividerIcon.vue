<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/src";
import { BreadcrumbDividerIconCode } from "../breadcrumbCode";
</script>
<template>
  <CodeHighlightWithPreview :code="BreadcrumbDividerIconCode">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <PhosphorIconHouse :size="16" />
            <span>Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <PhosphorIconAirplay :size="16" />
            <span>Products</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <PhosphorIconCircuitry :size="16" />
            <span>Electronics</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage>
            <PhosphorIconLaptop :size="16" />
            <span>Laptop</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </CodeHighlightWithPreview>
</template>
