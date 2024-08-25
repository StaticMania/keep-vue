<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import Pagination from "~/src/components/Pagination/Pagination.vue";
import PaginationItem from "~/src/components/Pagination/PaginationItem.vue";
import PaginationList from "~/src/components/Pagination/PaginationList.vue";
import PaginationNavigator from "~/src/components/Pagination/PaginationNavigator.vue";
</script>
<template>
  <Pagination shape="rounded">
    <PaginationNavigator>
      <PhCaretLeft size="18" />
      Previous
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
    <PaginationNavigator>
      Next
      <PhCaretRight size="18" />
    </PaginationNavigator>
  </Pagination>
</template>
