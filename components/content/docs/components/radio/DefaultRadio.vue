<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Label, Radio } from "~/src";
import { defaultRadioCode } from "./radioCode";
const picked = ref("bangladesh");
</script>

<template>
  <CodeHighlightWithPreview :code="defaultRadioCode">
    <div class="flex items-center justify-center">
      <form class="flex flex-col gap-2">
        <legend class="mb-1 text-body-3 text-metal-600 dark:text-metal-300">
          Choose your favorite country
        </legend>
        <fieldset class="flex items-center gap-2">
          <Radio id="pk" v-model="picked" name="country" value="pakistan" />
          <Label for="pk">Pakistan</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Radio id="bd" v-model="picked" name="country" value="bangladesh" />
          <Label for="bd">Bangladesh</Label>
        </fieldset>
        <fieldset class="flex items-center gap-2">
          <Radio
            id="palestine"
            v-model="picked"
            name="country"
            value="palestine" />
          <Label for="palestine">Palestine</Label>
        </fieldset>
      </form>
    </div>
  </CodeHighlightWithPreview>
</template>
