<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Pagination, PaginationItem, PaginationList } from "~/src";
import { DefaultPaginationCode } from "../paginationCode";

const activePage = ref<number>(1);
const handlePageClick = (pageNumber: number) => {
  activePage.value = pageNumber;
};
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultPaginationCode">
    <div class="flex items-center justify-center">
      <Pagination class="w-auto">
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhosphorIconDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
