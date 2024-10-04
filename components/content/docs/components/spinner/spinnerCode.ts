const DefaultSpinnerCode = {
  "SpinnerCode.vue": `<script setup>
import { Spinner } from "keep-vue";
</script>

<template>
    <Spinner color="info" size="xs" />
    <Spinner color="info" size="sm" />
    <Spinner color="info" size="md" />
    <Spinner color="info" size="lg" />
    <Spinner color="info" size="xl" />
</template>`,
};

const SpinnerButtonCode = {
  "SpinnerCode.vue": `<script setup>
import { Button, Spinner } from "keep-vue";
</script>

<template>
    <Button>
      <span class="pr-2">
        <Spinner color="gray" size="sm" />
      </span>
      Loading
    </Button>
    <Button variant="outline">
      <span class="pr-2">
        <Spinner color="gray" size="sm" />
      </span>
      Loading
    </Button>
</template>`,
};

const SpinnerColorsCode = {
  "SpinnerCode.vue": `<script setup>
import { Spinner } from "keep-vue";
</script>

<template>
    <Spinner color="failure" size="lg" />
    <Spinner color="gray" size="lg" />
    <Spinner color="info" size="lg" />
    <Spinner color="pink" size="lg" />
    <Spinner color="purple" size="lg" />
    <Spinner color="success" size="lg" />
    <Spinner color="warning" size="lg" />
</template>`,
};

const SpinnerSizesCode = {
  "SpinnerCode.vue": `<script setup>
import { Spinner } from "keep-vue";
</script>

<template>
    <Spinner color="failure" size="lg" />
    <Spinner color="gray" size="lg" />
    <Spinner color="info" size="lg" />
    <Spinner color="pink" size="lg" />
    <Spinner color="purple" size="lg" />
    <Spinner color="success" size="lg" />
    <Spinner color="warning" size="lg" />
</template>`,
};

export {
  DefaultSpinnerCode,
  SpinnerButtonCode,
  SpinnerColorsCode,
  SpinnerSizesCode,
};
