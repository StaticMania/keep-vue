<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/src";
import { data2 } from "./TableData";
import { OrdersTableCode } from "./tableCode";
</script>

<template>
  <CodeHighlightWithPreview :code="OrdersTableCode">
    <Table>
      <TableCaption>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <h2
              class="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Total Orders
            </h2>
            <Badge color="secondary">200 Orders</Badge>
          </div>
          <div class="flex items-center gap-5">
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconPlus class="size-4 fill-primary-400" />
              Add Order
            </Button>
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconFunnel class="size-4 fill-primary-400" />
              Filter Order
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconArrowsDownUp
                class="size-4 fill-metal-900 dark:fill-white" />
              Type
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconCalendar
                class="size-4 fill-metal-900 dark:fill-white" />
              Date
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconFlag class="size-4 fill-metal-900 dark:fill-white" />
              Country
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconSpinner
                class="size-4 fill-metal-900 dark:fill-white" />
              Status
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconDotsNine
                class="size-4 fill-metal-900 dark:fill-white" />
              Quant.
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconCurrencyDollar
                class="size-4 fill-metal-900 dark:fill-white" />
              Total Price
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[120px] items-center gap-1.5">
              <PhosphorIconNavigationArrow
                class="size-4 fill-metal-900 dark:fill-white" />
              Location
            </p>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in data2" :key="item.id">
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{{ item.type }}</TableCell>
          <TableCell>
            <div>
              <p>{{ item.date.day }}</p>
              <p
                class="text-body-5 font-normal text-metal-600 dark:text-metal-300">
                {{ item.date.time }}
              </p>
            </div>
          </TableCell>
          <TableCell class="flex items-center justify-center">
            <NuxtImg :src="item.country" alt="flag" />
          </TableCell>
          <TableCell>
            <Badge
              :color="
                item.status === 'Delivered'
                  ? 'success'
                  : item.status === 'In Transit'
                    ? 'error'
                    : 'warning'
              ">
              {{ item.status }}
            </Badge>
          </TableCell>
          <TableCell class="text-center">{{ item.quant }}</TableCell>
          <TableCell class="text-center">
            {{ item.price.toLocaleString() }}
          </TableCell>
          <TableCell>{{ item.location }}</TableCell>
          <TableCell>
            <Dropdown>
              <DropdownAction as-child>
                <button>
                  <PhosphorIconDotsThreeOutlineVertical
                    class="size-4 fill-metal-900 dark:fill-white" />
                </button>
              </DropdownAction>
              <DropdownContent
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
