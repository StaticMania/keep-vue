<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup generic="T extends Record<string, any>">
import {
  Axis,
  GroupedBar,
  StackedBar,
  type BulletLegendItemInterface,
} from "@unovis/ts";
import {
  VisAxis,
  VisGroupedBar,
  VisStackedBar,
  VisXYContainer,
} from "@unovis/vue";
import { useMounted } from "@vueuse/core";
import { computed, ref, type Component } from "vue";
import { cn } from "../../utils/cn";
import ChartCrosshair from "../Chart/ChartCrosshair.vue";
import type { BaseChartProps } from "../Chart/chartInterface";
import ChartLegend from "../Chart/ChartLegend.vue";

export interface BarChartProps {
  /**
   * Render custom tooltip component.
   */
  customTooltip?: Component;
  /**
   * Change the type of the chart
   * @default "grouped"
   */
  type?: "stacked" | "grouped";
  /**
   * Rounded bar corners
   * @default 0
   */
  roundedCorners?: number;
  /**
   * change the color of x-axis
   * @default 0
   */
  xAxisLabel?: string;
  /**
   * change the color of y-axis
   * @default 0
   */
  yAxisLabel?: string;
}

const props = withDefaults(defineProps<BaseChartProps<T> & BarChartProps>(), {
  type: "grouped",
  margin: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  filterOpacity: 0.2,
  roundedCorners: 0,
  showXAxis: true,
  showYAxis: true,
  showTooltip: true,
  showLegend: true,
  showGridLine: true,
});

const emits = defineEmits<{
  legendItemClick: [d: BulletLegendItemInterface, i: number];
}>();

type KeyOfT = Extract<keyof T, string>;
type Data = (typeof props.data)[number];

const index = computed(() => props.index as KeyOfT);

const colors = computed(() =>
  props.colors?.length ? props.colors : ["#1b4dff", "#11a75c"],
);

const legendItems = ref<BulletLegendItemInterface[]>(
  props.categories.map((category, i) => ({
    name: category,
    color: colors.value[i],
    inactive: false,
  })),
);

const isMounted = useMounted();

function handleLegendItemClick(d: BulletLegendItemInterface, i: number) {
  emits("legendItemClick", d, i);
}

const VisBarComponent = computed(() =>
  props.type === "grouped" ? VisGroupedBar : VisStackedBar,
);

const selectorBar = computed(() =>
  props.type === "grouped"
    ? GroupedBar.selectors.bar
    : StackedBar.selectors.bar,
);
</script>

<template>
  <div
    :class="cn('flex h-[400px] w-full flex-col items-end', $attrs.class ?? '')">
    <!-- chart legend  -->
    <ChartLegend
      v-if="showLegend"
      v-model:items="legendItems"
      @legend-item-click="handleLegendItemClick" />

    <VisXYContainer
      :data="data"
      :style="{ height: isMounted ? '100%' : 'auto' }"
      :margin="margin">
      <!-- chart crosshair and tooltip -->
      <ChartCrosshair
        v-if="showTooltip"
        :colors="colors"
        :items="legendItems"
        :custom-tooltip="customTooltip"
        :index="index" />

      <!-- bar component  -->
      <VisBarComponent
        :x="(d: Data, i: number) => i"
        :y="categories.map((category) => (d: Data) => d[category])"
        :color="colors"
        :rounded-corners="roundedCorners"
        :bar-padding="0.1"
        :attributes="{
          [selectorBar]: {
            opacity: (d: Data, i: number) => {
              const pos = i % categories.length;
              return legendItems[pos]?.inactive ? filterOpacity : 1;
            },
          },
        }" />

      <VisAxis
        v-if="showXAxis"
        :label="xAxisLabel"
        tick-text-align="center"
        type="x"
        :tick-format="xFormatter ?? ((v: number) => data[v]?.[index])"
        :num-ticks="data.length"
        :grid-line="false"
        :tick-line="false"
        tick-text-color="hsl(var(--vis-text-color))" />

      <VisAxis
        v-if="showYAxis"
        :label="yAxisLabel"
        type="y"
        :label-margin="20"
        :num-ticks="data.length"
        tick-text-align="center"
        :tick-line="false"
        :tick-format="yFormatter"
        :domain-line="false"
        :grid-line="showGridLine"
        :attributes="{
          [Axis.selectors.grid]: {
            class: 'text-metal-100 dark:text-metal-800',
          },
        }"
        tick-text-color="hsl(var(--vis-text-color))" />

      <slot />
    </VisXYContainer>
  </div>
</template>
