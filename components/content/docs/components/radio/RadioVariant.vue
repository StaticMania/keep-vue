<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Label, Radio } from "~/src";
import { radioVariantCode } from "./radioCode";
const selected = ref("bangladesh");
</script>

<template>
  <CodeHighlightWithPreview :code="radioVariantCode">
    <div class="flex items-center justify-center">
      <form class="flex flex-col gap-2">
        <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
          Choose your favorite country
        </legend>
        <fieldset class="flex items-center gap-2">
          <Radio
            id="pakistan"
            v-model="selected"
            name="country"
            value="pakistan" />
          <Label for="pakistan">Pakistan</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Radio
            id="bangladesh"
            v-model="selected"
            name="country"
            variant="rounded"
            value="bangladesh" />
          <Label for="bangladesh">Bangladesh</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Radio
            id="in"
            v-model="selected"
            name="country"
            variant="circle"
            value="india" />
          <Label for="in">India</Label>
        </fieldset>
      </form>
    </div>
  </CodeHighlightWithPreview>
</template>
