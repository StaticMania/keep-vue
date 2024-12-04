<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
import { PaginationNavigatorWithTextCode } from "./paginationCode";
</script>
<template>
  <CodeHighlightWithPreview :code="PaginationNavigatorWithTextCode">
    <div class="flex items-center justify-center">
      <Pagination shape="rounded" class="w-auto">
        <PaginationNavigator>
          <PhosphorIconCaretLeft size="18" />
          Previous
        </PaginationNavigator>
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
        <PaginationNavigator>
          Next
          <PhosphorIconCaretRight size="18" />
        </PaginationNavigator>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
