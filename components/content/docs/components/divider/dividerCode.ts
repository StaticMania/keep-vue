const DefaultDividerCode = {
  "DividerComponent.vue": `<script setup>
import { Divider } from "keep-vue";
</script>

<template>
 <section class="space-y-3 text-metal-500 dark:text-metal-300">
      <p>I am alone, and feel the charm of existence in this spot.</p>
      <Divider />
      <p>
        I should be incapable of drawing a single stroke at the present moment.
      </p>
      <Divider />
      <p>A wonderful serenity has taken possession of my entire soul.</p>
    </section>
</template>`,
};
const DividerAlignCode = {
  "DividerComponent.vue": `<script setup>
import { Divider } from "keep-vue";
</script>

<template>
    <section class="space-y-3">
      <Divider variant="start">Left Align</Divider>
      <Divider variant="center">Center Align</Divider>
      <Divider variant="end">Right Align</Divider>
    </section>
</template>`,
};

const DividerColorCode = {
  "DividerComponent.vue": `<script setup>
import { Divider } from "keep-vue";
</script>

<template>
    <section class="space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
</template>`,
};
const DividerSizeCode = {
  "DividerComponent.vue": `<script setup">
import { Divider } from "keep-vue";
</script>

<template>
    <section class="space-y-4">
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size="2xl" />
    </section>
</template>`,
};

export {
  DefaultDividerCode,
  DividerAlignCode,
  DividerColorCode,
  DividerSizeCode,
};
