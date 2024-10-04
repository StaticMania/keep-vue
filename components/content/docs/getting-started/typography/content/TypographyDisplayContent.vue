<script lang="ts" setup>
import PropertiesTable from "~/components/content/PropertiesTable.vue";
import { display } from "../TypographyAPI";
</script>

<template>
  <PropertiesTable>
    <tbody class="align-baseline">
      <tr v-for="data in display" :key="data['font-size']">
        <td
          translate="no"
          class="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
          text-display
        </td>
        <td
          translate="no"
          class="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
          font-size: {{ data["font-size"] }}; /*
          {{ remToPx(data["font-size"]) }} */
          <br />
          line-height: {{ data["line-height"] }}; /*
          {{ remToPx(data["line-height"]) }} */
          <br />
          letter-spacing: {{ data["letter-spacing"] }};
        </td>
      </tr>
    </tbody>
  </PropertiesTable>
</template>
