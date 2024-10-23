<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
import {
  CalendarRoot,
  type CalendarRootEmits,
  type CalendarRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import CalendarCell from "./CalendarCell.vue";
import CalendarCellTrigger from "./CalendarCellTrigger.vue";
import CalendarGrid from "./CalendarGrid.vue";
import CalendarGridBody from "./CalendarGridBody.vue";
import CalendarGridHead from "./CalendarGridHead.vue";
import CalendarGridRow from "./CalendarGridRow.vue";
import CalendarHeadCell from "./CalendarHeadCell.vue";
import CalendarHeader from "./CalendarHeader.vue";
import CalendarHeading from "./CalendarHeading.vue";
import CalendarNextButton from "./CalendarNextButton.vue";
import CalendarPrevButton from "./CalendarPrevButton.vue";
import type { classesType } from "./CalendarTypes";
import { useProvideCalender } from "./useCalenderStore";

export interface DatePickerClass {
  classes?: classesType;
  dayShape?: "circle" | "rounded";
}

const props = withDefaults(
  defineProps<CalendarRootProps & ClassProps & DatePickerClass>(),
  {
    dayShape: "rounded",
  },
);

const emits = defineEmits<CalendarRootEmits>();

const restProps = computed(() => {
  const { class: _, classes, dayShape, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);

const changedDayShaped = computed(() => {
  return props.dayShape;
});

useProvideCalender(changedDayShaped);
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
    <!-- header -->
    <CalendarHeader :class="cn(props.classes?.datePickerHeader)">
      <!-- prev btn  -->
      <CalendarPrevButton :class="cn(props.classes?.prevBtn)" />
      <!-- heading -->
      <CalendarHeading :class="cn(props.classes?.datePickerHeading)" />
      <!-- next btn  -->
      <CalendarNextButton :class="cn(props.classes?.prevBtn)" />
    </CalendarHeader>

    <!-- dayPickerBody -->
    <div
      :class="
        cn(
          'mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',
          props.classes?.datePickerBody,
        )
      ">
      <!-- MonthContainer -->
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        :class="cn(props.classes?.MonthContainer)">
        <!-- week name start  -->

        <!-- weekContainer  -->
        <CalendarGridHead
          :class="
            cn(
              'flex border-y border-metal-50 dark:border-metal-800',
              props.classes?.weekContainer,
            )
          ">
          <!-- weekHeader -->
          <CalendarGridRow :class="cn(props.classes?.weekHeader)">
            <!-- weekLabel -->
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              :class="cn(props.classes?.weekLabel)">
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>

        <!-- date start  -->

        <!-- dateContainer -->
        <CalendarGridBody :class="cn(props.classes?.dateContainer)">
          <!-- dateRow -->
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            :class="cn('mt-2 w-full', props.classes?.dateRow)">
            <!-- dateCell -->
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :class="cn(props.classes?.dateCell)"
              :date="weekDate">
              <!-- dateTrigger -->
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
