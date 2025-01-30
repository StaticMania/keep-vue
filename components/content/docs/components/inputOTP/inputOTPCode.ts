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
      <InputOTP id="pin-input" :model-value="value" @complete="handleComplete">
        <InputOTPGroup>
          <template v-for="(id, index) in 5" :key="id">
            <InputOTPInputField :index="index" />
          </template>
        </InputOTPGroup>
      </InputOTP>
</template>`,
};

export { defaultInputOTPCode };
