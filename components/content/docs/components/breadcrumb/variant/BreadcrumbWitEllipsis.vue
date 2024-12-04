<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/src";
import { BreadcrumbWithEllipsisCode } from "../breadcrumbCode";
</script>

<template>
  <CodeHighlightWithPreview :code="BreadcrumbWithEllipsisCode">
    <div class="flex items-center justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <PhosphorIconHouse :size="20" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbLink>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </CodeHighlightWithPreview>
</template>
