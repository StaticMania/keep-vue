<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
import { PaginationNavigatorWithTextCode } from "../paginationCode";

const activePage = ref<number>(1);

const handlePageClick = (pageNumber: number) => {
  activePage.value = pageNumber;
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < 10) {
    activePage.value += 1;
  }
};

const prevPage = () => {
  if (activePage.value === 10) {
    activePage.value = 4;
  } else if (activePage.value > 1) {
    activePage.value -= 1;
  }
};
</script>

<template>
  <CodeHighlightWithPreview :code="PaginationNavigatorWithTextCode">
    <div class="flex items-center justify-center">
      <Pagination shape="rounded" class="w-auto">
        <PaginationNavigator
          :disabled="activePage === 1"
          class="gap-1"
          @click="prevPage">
          <PhosphorIconCaretLeft size="18" />
          Previous
        </PaginationNavigator>
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
        <PaginationNavigator
          :disabled="activePage === 10"
          class="gap-1"
          @click="nextPage">
          Next
          <PhosphorIconCaretRight size="18" />
        </PaginationNavigator>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
