<!-- eslint-disable vue/require-default-prop -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { omit, type BulletLegendItemInterface } from "@unovis/ts";
import { VisCrosshair, VisTooltip } from "@unovis/vue";
import type { Component } from "vue";
import { createApp, defineProps, withDefaults } from "vue";
import ChartTooltip from "./ChartTooltip.vue";

export interface ChartCrosshairProps {
  colors: string[];
  index: string;
  items: BulletLegendItemInterface[];
  customTooltip?: Component;
}

const props = withDefaults(defineProps<ChartCrosshairProps>(), {
  colors: () => [],
});

const wm = new WeakMap();

function template(d: any) {
  if (wm.has(d)) {
    return wm.get(d);
  } else {
    const componentDiv = document.createElement("div");

    const omittedData = Object.entries(omit(d, [props.index])).map(
      ([key, value]) => {
        const legendReference = props.items.find((i) => i.name === key);
        return { ...legendReference, value };
      },
    );
    const TooltipComponent = props.customTooltip ?? ChartTooltip;
    createApp(TooltipComponent, {
      title: d[props.index].toString(),
      data: omittedData,
    }).mount(componentDiv);
    wm.set(d, componentDiv.innerHTML);
    return componentDiv.innerHTML;
  }
}
function color(d: unknown, i: number) {
  return props.colors[i] ?? "bg-transparent";
}
</script>

<template>
  <VisTooltip :horizontal-shift="20" :vertical-shift="20" />
  <VisCrosshair :template="template" :color="color" />
</template>
