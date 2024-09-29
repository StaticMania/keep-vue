<script lang="ts" setup>
import {
  RangeCalendarRoot,
  type RangeCalendarRootEmits,
  type RangeCalendarRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed, defineEmits, defineProps } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";
import type { classesType } from "../Calender/CalendarTypes";
import RangeCalendarGrid from "./RangeCalendarGrid.vue";

export interface DatePickerClass {
  classes?: classesType;
}

const props = defineProps<
  RangeCalendarRootProps & ClassProps & DatePickerClass
>();

const emits = defineEmits<RangeCalendarRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, classes, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    :class="
      cn(
        'max-w-min rounded-xl border border-metal-50 bg-white p-5 dark:border-metal-800 dark:bg-metal-900',
        props.class,
      )
    "
    v-bind="forwarded">
    <RangeCalendarHeader :class="cn(props.classes?.datePickerHeader)">
      <RangeCalendarPrevButton :class="cn(props.classes?.prevBtn)" />
      <RangeCalendarHeading :class="cn(props.classes?.datePickerHeading)" />
      <RangeCalendarNextButton :class="cn(props.classes?.prevBtn)" />
    </RangeCalendarHeader>

    <div
      :class="
        cn(
          'mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',
          props.classes?.datePickerBody,
        )
      ">
      <RangeCalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        :class="cn(props.classes?.MonthContainer)">
        <RangeCalendarGridHead
          :class="
            cn(
              'flex border-y border-metal-50 dark:border-metal-800',
              props.classes?.weekContainer,
            )
          ">
          <RangeCalendarGridRow :class="cn(props.classes?.weekHeader)">
            <RangeCalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              :class="cn(props.classes?.weekLabel)">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>

        <!-- date start  -->
        <RangeCalendarGridBody :class="cn(props.classes?.dateContainer)">
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            :class="cn('mt-2 w-full', props.classes?.dateRow)">
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              :class="cn(props.classes?.dateCell)">
              <RangeCalendarCellTrigger
                :class="cn(props.classes?.dateTrigger)"
                :day="weekDate"
                :month="month.value" />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
