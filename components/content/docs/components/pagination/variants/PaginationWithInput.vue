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
import { PaginationWithInputCode } from "../paginationCode";

const activePage = ref<number>(1);
const inputPage = ref<string>("");
const totalPages = 200;

const handlePageClick = (pageNumber: number) => {
  activePage.value = pageNumber;
  inputPage.value = "";
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < totalPages) {
    activePage.value += 1;
  }
  inputPage.value = "";
};

const prevPage = () => {
  if (activePage.value === 10) {
    activePage.value = 4;
  } else if (activePage.value > 1) {
    activePage.value -= 1;
  }
  inputPage.value = "";
};

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  inputPage.value = value;
};

const handleGoToPage = () => {
  const page = parseInt(inputPage.value);
  if (page && page >= 1 && page <= totalPages) {
    activePage.value = page;
    inputPage.value = "";
  } else {
    inputPage.value = "";
  }
};
</script>

<template>
  <CodeHighlightWithPreview :code="PaginationWithInputCode">
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
          :disabled="activePage === totalPages"
          @click="nextPage">
          <PhosphorIconCaretRight size="18" />
        </PaginationNavigator>
        <PaginationGoTo>
          <span>/ Go to</span>
          <Input
            v-model="inputPage"
            placeholder="Enter Number"
            type="number"
            class="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
            @input="handleInputChange"
            @keyup.enter="handleGoToPage" />
          <span>of {{ totalPages }}</span>
        </PaginationGoTo>
      </Pagination>
    </div>
  </CodeHighlightWithPreview>
</template>
