<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Badge,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "~/src";
import { data3 } from "./TableData";
import { ProductTableCode } from "./tableCode";
</script>

<template>
  <CodeHighlightWithPreview
    :code="ProductTableCode"
    preview-class="mx-0 w-auto px-5">
    <Table>
      <TableCaption>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <h3
              class="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Total Product
            </h3>
            <Badge>500 Product</Badge>
          </div>
          <div class="flex items-center gap-5">
            <Button variant="outline" class="flex gap-1.5">
              <PhosphorIconPlus class="size-4 fill-primary-400" />
              Add Product
            </Button>
            <Button variant="outline" class="flex gap-1.5">
              <PhosphorIconFunnel class="size-4 fill-primary-400" />
              Filter Product
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div class="w-[320px]">Product Name</div>
          </TableHead>
          <TableHead>
            <div class="w-[65px]">Price</div>
          </TableHead>
          <TableHead>
            <div class="w-[100px]">Category</div>
          </TableHead>
          <TableHead>
            <div class="w-[60px]">Rating</div>
          </TableHead>
          <TableHead>
            <div class="w-[60px]">Stock</div>
          </TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in data3" :key="item.id">
          <TableCell>{{ item.title }}</TableCell>
          <TableCell>{{ item.price }}</TableCell>
          <TableCell>{{ item.category }}</TableCell>
          <TableCell>{{ item.rating.rate }}</TableCell>
          <TableCell>{{ item.rating.count }}</TableCell>
          <TableCell>
            <Dropdown>
              <DropdownAction as-child>
                <button>
                  <PhosphorIconDotsThreeOutlineVertical
                    class="size-4 fill-metal-900 dark:fill-white" />
                </button>
              </DropdownAction>
              <DropdownContent
                align="end"
                class="max-w-[200px] border border-metal-100 p-3">
                <DropdownList>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </CodeHighlightWithPreview>
</template>
