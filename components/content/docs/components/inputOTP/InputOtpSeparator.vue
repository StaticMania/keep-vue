<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  InputOTP,
  InputOTPDivider,
  InputOTPGroup,
  InputOTPInputField,
  Toast,
} from "~/src";
import { inputOtpSeparatorCode } from "./inputOTPCode";

const value = ref<string[]>([]);

const handleComplete = (e: string[]) => {
  Toast(e.join(""));
};
</script>

<template>
  <CodeHighlightWithPreview :code="inputOtpSeparatorCode">
    <div class="flex items-center justify-center">
      <InputOTP
        id="pin-input"
        v-model="value"
        placeholder="○"
        @complete="handleComplete">
        <InputOTPGroup>
          <template v-for="(id, index) in 5" :key="id">
            <InputOTPInputField :index="index" />
            <template v-if="index !== 4">
              <InputOTPDivider />
            </template>
          </template>
        </InputOTPGroup>
      </InputOTP>
    </div>
  </CodeHighlightWithPreview>
</template>
