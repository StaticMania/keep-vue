<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Input,
  Pagination,
  PaginationGoTo,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
import { PaginationWithInputCode } from "./paginationCode";
</script>
<template>
  <CodeHighlightWithPreview :code="PaginationWithInputCode">
    <div class="flex items-center justify-center">
      <Pagination shape="circle" class="w-auto">
        <PaginationNavigator shape="circle">
          <PhosphorIconCaretLeft size="18" />
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
        <PaginationNavigator shape="circle">
          <PhosphorIconCaretRight size="18" />
        </PaginationNavigator>
        <PaginationGoTo>
          <span>/ Go to</span>
          <Input
            placeholder="Enter Number"
            type="number"
            class="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300" />
          <span>of 200</span>
        </PaginationGoTo>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
