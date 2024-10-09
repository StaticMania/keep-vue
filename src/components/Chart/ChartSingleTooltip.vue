<!-- eslint-disable vue/require-default-prop -->
<script setup lang="ts">
import { type BulletLegendItemInterface } from "@unovis/ts";
import { VisTooltip } from "@unovis/vue";
import type { Component } from "vue";
import { defineProps, withDefaults } from "vue";
import { useTooltip } from "./useTooltip";

export interface ChartSingleTooltipProps {
  selector: string;
  index: string;
  items?: BulletLegendItemInterface[];
  valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string;
  customTooltip?: Component;
}

const props = withDefaults(defineProps<ChartSingleTooltipProps>(), {
  valueFormatter: (tick: number) => `${tick}`,
});

const template = useTooltip(props);
</script>

<template>
  <VisTooltip
    :horizontal-shift="20"
    :vertical-shift="20"
    :triggers="{
      [props.selector]: template,
    }" />
</template>
