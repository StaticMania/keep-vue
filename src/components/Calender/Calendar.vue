<script lang="ts" setup>
import {
  CalendarRoot,
  type CalendarRootEmits,
  type CalendarRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";
import type { classesType } from "./CalendarTypes";

interface DatePickerClass {
  classes?: classesType;
}

const props = defineProps<CalendarRootProps & ClassProps & DatePickerClass>();

const emits = defineEmits<CalendarRootEmits>();

const restProps = computed(() => {
  const { class: _, classes, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    :class="
      cn(
        'max-w-min rounded-xl border border-metal-50 bg-white p-5 dark:border-metal-800 dark:bg-metal-900',
        props.class,
      )
    "
    v-bind="forwarded">
    <CalendarHeader :class="cn(props.classes?.datePickerHeader)">
      <CalendarPrevButton :class="cn(props.classes?.prevBtn)" />
      <CalendarHeading :class="cn(props.classes?.datePickerHeading)" />
      <CalendarNextButton :class="cn(props.classes?.prevBtn)" />
    </CalendarHeader>

    <div
      :class="
        cn(
          'mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',
          props.classes?.datePickerBody,
        )
      ">
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        :class="cn(props.classes?.MonthContainer)">
        <!-- week name start  -->
        <CalendarGridHead
          :class="
            cn(
              'flex border-y border-metal-50 dark:border-metal-800',
              props.classes?.weekContainer,
            )
          ">
          <CalendarGridRow :class="cn(props.classes?.weekHeader)">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              :class="cn(props.classes?.weekLabel)">
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>

        <!-- date start  -->
        <CalendarGridBody :class="cn(props.classes?.dateContainer)">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            :class="cn('mt-2 w-full', props.classes?.dateRow)">
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :class="cn(props.classes?.dateCell)"
              :date="weekDate">
              <CalendarCellTrigger
                :class="cn(props.classes?.dateTrigger)"
                :day="weekDate"
                :month="month.value" />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>

<!-- 'data-[selected]:bg-green-600 data-[selected]:text-white data-[selected]:opacity-100 data-[selected]:focus:bg-green-600', -->
