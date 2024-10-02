<script setup lang="ts">
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import type { DateRange } from "radix-vue";
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  RangeDatePicker,
} from "~/src";
import { DateRangePickerCode } from "./datePickerCodes";

const df = new DateFormatter("en-US", { dateStyle: "medium" });

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ weeks: 2 }),
}) as Ref<DateRange>;
</script>

<template>
  <CodeHighlightWithPreview :code="DateRangePickerCode">
    <Popover>
      <PopoverAction as-child>
        <Button
          color="secondary"
          size="lg"
          class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline">
          <PhosphorIconCalendar
            :size="20"
            class="text-metal-400 dark:text-white" />

          <span v-if="value?.start && value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }} -
            {{ df.format(value.end.toDate(getLocalTimeZone())) }}
          </span>
          <span v-else>Pick a date</span>
        </Button>
      </PopoverAction>
      <PopoverContent class="z-50 max-w-min p-0">
        <RangeDatePicker v-model="value" initial-focus />
      </PopoverContent>
    </Popover>
  </CodeHighlightWithPreview>
</template>
