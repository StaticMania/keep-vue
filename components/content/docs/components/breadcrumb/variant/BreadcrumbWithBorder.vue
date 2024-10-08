<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/src";
import { breadcrumbWithBorderCode } from "../breadcrumbCode";
</script>
<template>
  <CodeHighlightWithPreview :code="breadcrumbWithBorderCode">
    <div class="space-y-3">
      <Breadcrumb>
        <BreadcrumbList border-type="border-xy">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <PhosphorIconHouse :size="20" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbList border-type="border-y">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <PhosphorIconHouse :size="20" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Components
            </BreadcrumbLink>
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
