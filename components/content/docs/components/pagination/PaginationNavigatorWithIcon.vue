<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
import { PaginationNavigatorWithIconCode } from "./paginationCode";
</script>
<template>
  <CodeHighlightWithPreview :code="PaginationNavigatorWithIconCode">
    <Pagination shape="circle">
      <PaginationNavigator shape="circle">
        <PhCaretLeft size="18" />
      </PaginationNavigator>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>
          <PhDotsThree size="20" />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
      <PaginationNavigator shape="circle">
        <PhCaretRight size="18" />
      </PaginationNavigator>
    </Pagination>
  </CodeHighlightWithPreview>
</template>
