const defaultInputOTPCode = {
  "DefaultInputOTP.vue": `<script lang="ts" setup>
import {ref} from 'vue'; 
import { InputOTP, InputOTPGroup, InputOTPInputField, Toast } from "keep-vue";

const value = ref<string[]>([]);

function handleComplete(e: string[]) {
  Toast(e.join(""));
}
</script>

<template>
      <InputOTP id="pin-input" v-model="value" @complete="handleComplete">
        <InputOTPGroup>
          <template v-for="(id, index) in 5" :key="id">
            <InputOTPInputField :index="index" />
          </template>
        </InputOTPGroup>
      </InputOTP>
</template>`,
};

const inputOtpSeparatorCode = {
  "DefaultInputOTP.vue": `<script lang="ts" setup>
import {
  InputOTP,
  InputOTPDivider,
  InputOTPGroup,
  InputOTPInputField,
  Toast,
} from "keep-vue";
import { defaultInputOTPCode } from "./inputOTPCode";

const value = ref<string[]>([]);

const handleComplete = (e: string[]) => {
  Toast(e.join(""));
};
</script>

<template>
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
</template>
`,
};

export { defaultInputOTPCode, inputOtpSeparatorCode };
