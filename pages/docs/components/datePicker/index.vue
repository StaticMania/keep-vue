<script setup lang="ts">
import CustomDateTrigger from "./variant/CustomDateTrigger.vue";
import DateRangePicker from "./variant/DateRangePicker.vue";
import DefaultDatePicker from "./variant/DefaultDatePicker.vue";
import MultipleDatePicker from "./variant/MultipleDatePicker.vue";
import MultipleDateRangePicker from "./variant/MultipleDateRangePicker.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "DatePicker - Keep Vue",
  description:
    "The Date Picker component offers an intuitive way for users to select dates from a calendar. With this component, users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of customization options, allowing developers to control date formats, highlight specific dates, set minimum and maximum selectable dates, and more.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 rounded-lg bg-white p-6">
        <h3>Default Date Picker</h3>
        <DefaultDatePicker />
      </div>
      <div class="space-y-3 rounded-lg bg-white p-6">
        <h3>Multiple Date Picker</h3>
        <MultipleDatePicker />
      </div>
      <div class="space-y-3 rounded-lg bg-white p-6">
        <h3>Date Range Picker</h3>
        <DateRangePicker />
      </div>
      <div class="space-y-3 rounded-lg bg-white p-6">
        <h3>Multiple Date Range Picker</h3>
        <MultipleDateRangePicker />
      </div>
      <div class="space-y-3 rounded-lg bg-white p-6">
        <h3>Date Picker with custom Style</h3>
        <CustomDateTrigger />
      </div>
    </div>
  </DocsContentLayout>
</template>
