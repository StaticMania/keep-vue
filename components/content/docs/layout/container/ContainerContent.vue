<script lang="ts" setup>
import { ContainerData } from "./ContainerData";
</script>

<template>
  <div
    id="linkPage"
    class="min-w-full flex-none overflow-hidden px-4 sm:px-6 md:px-0">
    <table
      class="whitespace-no-wrap z-50 mt-10 w-full min-w-max table-auto overflow-hidden rounded-xl bg-white text-left lg:min-w-min dark:bg-metal-900">
      <thead>
        <tr>
          <th
            class="rounded-tl-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
            Class
          </th>
          <th
            class="bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
            Breakpoint
          </th>
          <th
            class="rounded-tr-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
            Properties
          </th>
        </tr>
      </thead>
      <tbody class="align-baseline">
        <tr v-for="item in ContainerData" :key="item.id">
          <td
            translate="no"
            :class="
              item.name &&
              `border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300`
            ">
            {{ item.name }}
          </td>
          <td
            translate="no"
            class="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            {{ item.breakpoints }}
          </td>
          <td
            translate="no"
            class="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
            {{ item.properties }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
