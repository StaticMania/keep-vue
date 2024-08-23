<script setup lang="ts">
import { PhDotsThree } from "@phosphor-icons/vue";
import Pagination from "../Pagination/Pagination.vue";
import PaginationItem from "../Pagination/PaginationItem.vue";
import PaginationList from "../Pagination/PaginationList.vue";
</script>

<template>
  <Pagination>
    <PaginationList>
      <PaginationItem as-child>2</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree :size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
  </Pagination>
</template>
