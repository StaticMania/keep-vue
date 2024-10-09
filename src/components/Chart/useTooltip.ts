/* eslint-disable @typescript-eslint/no-explicit-any */
import { omit, type BulletLegendItemInterface } from "@unovis/ts";
import type { Component } from "vue";
import { createApp } from "vue";
import ChartTooltip from "./ChartTooltip.vue";

export function useTooltip(props: {
  index: string;
  items?: BulletLegendItemInterface[];
  valueFormatter: (tick: number, i?: number, ticks?: number[]) => string;
  customTooltip?: Component;
}) {
  const wm = new WeakMap();

  return function template(
    d: any,
    i: number,
    elements: (HTMLElement | SVGElement)[],
  ) {
    if (props.index in d) {
      if (wm.has(d)) {
        return wm.get(d);
      } else {
        const componentDiv = document.createElement("div");
        const omittedData = Object.entries(omit(d, [props.index])).map(
          ([key, value]) => {
            const legendReference = props.items?.find((i) => i.name === key);
            return {
              ...legendReference,
              value: props.valueFormatter(value as number),
            };
          },
        );
        const TooltipComponent = props.customTooltip ?? ChartTooltip;
        createApp(TooltipComponent, {
          title: d[props.index],
          data: omittedData,
        }).mount(componentDiv);
        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    } else {
      const data = d.data;

      if (wm.has(data)) {
        return wm.get(data);
      } else {
        const style = getComputedStyle(elements[i]);
        const omittedData = [
          {
            name: data.name,
            value: props.valueFormatter(data[props.index] as number),
            color: style.fill,
          },
        ];
        const componentDiv = document.createElement("div");
        const TooltipComponent = props.customTooltip ?? ChartTooltip;

        createApp(TooltipComponent, {
          title: d[props.index].toString(),
          data: omittedData,
        }).mount(componentDiv);

        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    }
  };
}
