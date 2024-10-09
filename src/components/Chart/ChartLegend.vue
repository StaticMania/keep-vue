<script lang="ts" setup>
import { BulletLegend, type BulletLegendItemInterface } from "@unovis/ts";
import { VisBulletLegend } from "@unovis/vue";
import { defineEmits, defineProps, onMounted, ref, withDefaults } from "vue";
import { buttonVariants } from "../Button/buttonTheme";

export interface ChartLegendProps {
  items: BulletLegendItemInterface[];
}

const props = withDefaults(defineProps<ChartLegendProps>(), {
  items: () => [],
});

const emits = defineEmits<{
  legendItemClick: [d: BulletLegendItemInterface, i: number];
  "update:items": [payload: BulletLegendItemInterface[]];
}>();

const elRef = ref<HTMLElement>();

onMounted(() => {
  const selector = `.${BulletLegend.selectors.item}`;
  nextTick(() => {
    const elements = elRef.value?.querySelectorAll(selector);
    const classes = buttonVariants({ variant: "rounded", size: "xs" }).split(
      " ",
    );
    elements?.forEach((el) =>
      el.classList.add(
        ...classes,
        "!inline-flex",
        "!mr-2",
        "hover:bg-metal-200",
        "*:dark:text-metal-300",
      ),
    );
  });
});

function onLegendItemClick(d: BulletLegendItemInterface, i: number) {
  emits("legendItemClick", d, i);

  const isBulletActive = !props.items[i].inactive;
  const isFilterApplied = props.items.some((i) => i.inactive);

  let updatedItems: BulletLegendItemInterface[];

  if (isFilterApplied && isBulletActive) {
    // Reset the filter
    updatedItems = props.items.map((item) => ({
      ...item,
      inactive: false,
    }));
  } else {
    // Apply selection, set other items as inactive
    updatedItems = props.items.map((item) =>
      item.name === d.name
        ? { ...d, inactive: false }
        : { ...item, inactive: true },
    );
  }

  // Capitalize the names
  updatedItems = updatedItems.map((item) => ({
    ...item,
    name:
      typeof item.name === "string"
        ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
        : item.name,
  }));

  emits("update:items", updatedItems);
}
</script>

<template>
  <div ref="elRef" class="mr-auto w-max">
    <VisBulletLegend :items="items" :on-legend-item-click="onLegendItemClick" />
  </div>
</template>
