<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
import { PaginationNavigatorWithIconCode } from "../paginationCode";

const activePage = ref<number>(1);
const handlePageClick = (pageNumber: number) => {
  activePage.value = pageNumber;
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < 4) {
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
  <CodeHighlightWithPreview :code="PaginationNavigatorWithIconCode">
    <div class="flex items-center justify-center">
      <Pagination shape="circle" class="w-auto">
        <PaginationNavigator
          shape="circle"
          :disabled="activePage === 1"
          @click="prevPage">
          <PhosphorIconCaretLeft size="18" />
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
          shape="circle"
          :disabled="activePage === 10"
          @click="nextPage">
          <PhosphorIconCaretRight size="18" />
        </PaginationNavigator>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
