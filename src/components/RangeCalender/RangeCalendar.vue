<script lang="ts" setup>
import {
  RangeCalendarRoot,
  type RangeCalendarRootEmits,
  type RangeCalendarRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import type { DatePickerClass } from "../Calender/Calendar.vue";
import RangeCalendarCell from "./RangeCalendarCell.vue";
import RangeCalendarCellTrigger from "./RangeCalendarCellTrigger.vue";
import RangeCalendarGrid from "./RangeCalendarGrid.vue";
import RangeCalendarGridBody from "./RangeCalendarGridBody.vue";
import RangeCalendarGridHead from "./RangeCalendarGridHead.vue";
import RangeCalendarGridRow from "./RangeCalendarGridRow.vue";
import RangeCalendarHeadCell from "./RangeCalendarHeadCell.vue";
import RangeCalendarHeader from "./RangeCalendarHeader.vue";
import RangeCalendarHeading from "./RangeCalendarHeading.vue";
import RangeCalendarNextButton from "./RangeCalendarNextButton.vue";
import RangeCalendarPrevButton from "./RangeCalendarPrevButton.vue";
import { useProvideRangeCalender } from "./RangeCalenderStore";

const props = withDefaults(
  defineProps<RangeCalendarRootProps & ClassProps & DatePickerClass>(),
  {
    dayShape: "rounded",
  },
);

const emits = defineEmits<RangeCalendarRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, classes, dayShape, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const changedDayShaped = computed(() => {
  return props.dayShape;
});

useProvideRangeCalender(changedDayShaped);
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
    <!-- header -->
    <RangeCalendarHeader :class="cn(props.classes?.datePickerHeader)">
      <!-- prev btn  -->
      <RangeCalendarPrevButton :class="cn(props.classes?.prevBtn)" />
      <!-- heading -->
      <RangeCalendarHeading :class="cn(props.classes?.datePickerHeading)" />
      <!-- next btn  -->
      <RangeCalendarNextButton :class="cn(props.classes?.prevBtn)" />
    </RangeCalendarHeader>

    <!-- dayPickerBody -->
    <div
      :class="
        cn(
          'mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',
          props.classes?.datePickerBody,
        )
      ">
      <!-- MonthContainer -->
      <RangeCalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        :class="cn(props.classes?.MonthContainer)">
        <!-- week name start  -->

        <!-- weekContainer  -->
        <RangeCalendarGridHead
          :class="cn('flex', props.classes?.weekContainer)">
          <!-- weekHeader -->
          <RangeCalendarGridRow :class="cn(props.classes?.weekHeader)">
            <!-- weekLabel -->
            <RangeCalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              :class="cn(props.classes?.weekLabel)">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>

        <!-- date start  -->

        <!-- dateContainer -->
        <RangeCalendarGridBody :class="cn(props.classes?.dateContainer)">
          <!-- dateRow -->
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            :class="cn('mt-2 w-full', props.classes?.dateRow)">
            <!-- dateCell -->
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              :class="cn(props.classes?.dateCell)">
              <!-- dateTrigger -->
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
