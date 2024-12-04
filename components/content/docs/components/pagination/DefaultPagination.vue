<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Pagination, PaginationItem, PaginationList } from "~/src";
import { DefaultPaginationCode } from "./paginationCode";
</script>
<template>
  <CodeHighlightWithPreview :code="DefaultPaginationCode">
    <div class="flex items-center justify-center">
      <Pagination class="w-auto">
        <PaginationList>
          <PaginationItem>1</PaginationItem>
          <PaginationItem active>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>
            <PhosphorIconDotsThree size="20" />
          </PaginationItem>
          <PaginationItem>10</PaginationItem>
        </PaginationList>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
