<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/src";
import { BreadcrumbActiveBarOutlineCode } from "../breadcrumbCode";
</script>

<template>
  <CodeHighlightWithPreview :code="BreadcrumbActiveBarOutlineCode">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink><PhosphorIconHouse :size="20" /></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Overview</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Token</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink><PhosphorIconHouse :size="20" /></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Overview</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Token</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage outline>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </CodeHighlightWithPreview>
</template>
