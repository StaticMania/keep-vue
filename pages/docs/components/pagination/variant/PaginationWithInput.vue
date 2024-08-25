<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import Pagination from "~/src/components/Pagination/Pagination.vue";
import PaginationGoTo from "~/src/components/Pagination/PaginationGoTo.vue";
import PaginationItem from "~/src/components/Pagination/PaginationItem.vue";
import PaginationList from "~/src/components/Pagination/PaginationList.vue";
import PaginationNavigator from "~/src/components/Pagination/PaginationNavigator.vue";
</script>
<template>
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
    <PaginationGoTo>
      <span>/ Go to</span>
      <input
        type="number"
        class="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
        value="20" />
      <span>of 200</span>
    </PaginationGoTo>
  </Pagination>
</template>
