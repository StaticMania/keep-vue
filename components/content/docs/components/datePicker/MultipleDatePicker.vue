<script lang="ts" setup>
import {
  DateFormatter,
  getLocalTimeZone,
  type DateValue,
} from "@internationalized/date";
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "~/src";
import { MultipleDatePickerCode } from "./datePickerCodes";

const value = ref<DateValue>();
const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
</script>

<template>
  <CodeHighlightWithPreview :code="MultipleDatePickerCode">
    <div class="flex items-center justify-center">
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

            {{
              value
                ? df.format(value.toDate(getLocalTimeZone()))
                : "Pick a date"
            }}
          </Button>
        </PopoverAction>
        <PopoverContent class="z-50 max-w-min p-0">
          <DatePicker v-model="value" :number-of-months="2" initial-focus />
        </PopoverContent>
      </Popover>
    </div>
  </CodeHighlightWithPreview>
</template>
