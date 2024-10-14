const DefaultDatePickerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";

import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-vue";

const value = ref();
const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"
        }}
      </Button>
    </PopoverAction>
    <PopoverContent class="z-50 max-w-min p-0">
      <DatePicker v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>
`,
};

const CircleDatePickerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";

import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-vue";

const value = ref();
const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"
        }}
      </Button>
    </PopoverAction>
    <PopoverContent class="z-50 max-w-min p-0">
      <DatePicker v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>
`,
};

const CustomDateTriggerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";
import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-vue";

const value = ref();
const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"
        }}
      </Button>
    </PopoverAction>
    <PopoverContent class="z-50 max-w-min p-0">
      <DatePicker
        v-model="value"
        :classes="{
          dateTrigger:
            'data-[selected]:bg-green-500 data-[selected]:text-white data-[selected]:opacity-100 data-[selected]:focus:bg-green-500',
        }"
        initial-focus />
    </PopoverContent>
  </Popover>
</template>`,
};

const DateRangePickerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  RangeDatePicker,
} from "keep-vue";

const df = new DateFormatter("en-US", { dateStyle: "medium" });

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ weeks: 2 }),
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

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
</template>`,
};

const MultipleDatePickerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
 
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";
import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-vue";

const value = ref();
const df = new DateFormatter("en-US", {
  dateStyle: "long",
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"
        }}
      </Button>
    </PopoverAction>
    <PopoverContent class="z-50 max-w-min p-0">
      <DatePicker v-model="value" :number-of-months="2" initial-focus />
    </PopoverContent>
  </Popover>
</template>`,
};

const MultipleDateRangePickerCode = {
  "DatePickerComponent.vue": `<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { PhCalendar } from "@phosphor-icons/vue";
import { ref } from "vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  RangeDatePicker,
} from "keep-vue";

const df = new DateFormatter("en-US", { dateStyle: "medium" });

const value = ref({
  start: today(getLocalTimeZone()),
  end: today(getLocalTimeZone()).add({ weeks: 2 }),
});
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button
        color="secondary"
        size="lg"
        class="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
        variant="outline">
        <PhCalendar :size="20" class="text-metal-400 dark:text-white" />

        <span v-if="value?.start && value.end">
          {{ df.format(value.start.toDate(getLocalTimeZone())) }} -
          {{ df.format(value.end.toDate(getLocalTimeZone())) }}
        </span>
        <span v-else>Pick a date</span>
      </Button>
    </PopoverAction>
    <PopoverContent class="z-50 max-w-min p-0">
      <RangeDatePicker v-model="value" :number-of-months="2" initial-focus />
    </PopoverContent>
  </Popover>
</template>`,
};

export {
  CircleDatePickerCode,
  CustomDateTriggerCode,
  DateRangePickerCode,
  DefaultDatePickerCode,
  MultipleDatePickerCode,
  MultipleDateRangePickerCode,
};
