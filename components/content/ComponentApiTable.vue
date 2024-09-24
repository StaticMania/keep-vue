<script lang="ts" setup>
interface ComponentApiProps {
  id: number;
  propsName: string;
  propsDescription: string;
  default?: string;
  propsType: string | string[];
}

interface ComponentProps {
  data: ComponentApiProps[];
}

defineProps<ComponentProps>();
</script>

<template>
  <div class="custom-font mx-auto mb-8 w-full overflow-auto">
    <table
      class="whitespace-no-wrap z-50 mt-10 min-w-max table-auto overflow-hidden rounded-xl bg-white text-left md:w-full lg:min-w-min dark:bg-metal-900">
      <thead>
        <tr>
          <th
            class="rounded-bl rounded-tl bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
            Property
          </th>

          <th
            class="bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
            Description
          </th>

          <th
            class="bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
            Type
          </th>

          <th
            class="rounded-br bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
            Default
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item?.id">
          <td
            class="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-black dark:border-metal-800 dark:text-metal-300">
            {{ item.propsName }}
          </td>

          <td
            class="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
            {{ item.propsDescription }}
          </td>

          <td
            v-if="typeof item.propsType === 'string'"
            class="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
            {{ item.propsType }}
          </td>

          <td
            v-else
            class="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
            <pre
              v-for="prop in item.propsType"
              :key="prop"
              class="m-0.5 inline-block rounded-xl bg-metal-100 px-2 py-0.5 dark:bg-metal-800"
              >{{ prop }}</pre
            >
          </td>

          <td
            class="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
            {{ item?.default ? item.default : "None" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.custom-font {
  font-family: "Space Mono", monospace;
}
</style>
