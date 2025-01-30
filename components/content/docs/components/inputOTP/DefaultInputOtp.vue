<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { InputOTP, InputOTPGroup, InputOTPInputField, Toast } from "~/src";
import { defaultInputOTPCode } from "./inputOTPCode";

const value = ref<string[]>([]);

const handleComplete = (e: string[]) => {
  Toast(e.join(""));
};
</script>

<template>
  <CodeHighlightWithPreview :code="defaultInputOTPCode">
    <div class="flex items-center justify-center">
      <InputOTP id="pin-input" v-model="value" @complete="handleComplete">
        <InputOTPGroup>
          <InputOTPInputField
            v-for="(id, index) in 5"
            :key="id"
            :index="index" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  </CodeHighlightWithPreview>
</template>
