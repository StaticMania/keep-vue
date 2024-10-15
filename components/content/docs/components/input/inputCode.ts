const defaultInput = {
  "InputComponent.vue": `<script setup>
import { ref } from "vue";
import { Input } from "keep-vue";

const inputValue = ref("");
console.log(inputValue.value);
</script>

<template>
    <Input v-model="inputValue" placeholder="Enter name" type="text" />
</template>
`,
};

const disabledInputCode = {
  "InputComponent.vue": `<script setup>
import { Input } from "keep-vue";
</script>

<template>
    <Input disabled placeholder="Enter name" />
</template>
    `,
};

const inputUseCasesCode = {
  "InputComponent.vue": `<script setup>
import { PhEnvelope, PhLock } from '@phosphor-icons/vue'
import { Button, Input, InputIcon, Label } from 'keep-vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log(email.value, password.value)
}
</script>

<template>
  <form
    class="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md"
    @submit.prevent="handleSubmit"
  >
    <fieldset class="space-y-1">
      <Label for="name">Email*</Label>
      <div class="relative">
        <Input v-model="email" type="email" placeholder="Enter email" class="ps-11" />
        <InputIcon>
          <PhEnvelope :size="19" color="#AFBACA" />
        </InputIcon>
      </div>
    </fieldset>
    <fieldset class="space-y-1">
      <Label for="password">Password*</Label>
      <div class="relative">
        <Input
          id="password"
          v-model="password"
          placeholder="Enter password"
          type="password"
          class="ps-11"
        />
        <InputIcon>
          <PhLock :size="19" color="#AFBACA" />
        </InputIcon>
      </div>
    </fieldset>
    <Button size="sm" color="secondary" type="submit">Sign In</Button>
  </form>
</template>`,
};

const inputWithIconCode = {
  "InputComponent.vue": `<script setup>
import { PhEnvelope } from "@phosphor-icons/vue";
import { ref } from "vue";
import { Input, InputIcon } from "keep-vue";

const inputValue = ref("");
console.log(inputValue.value);
</script>

<template>
    <fieldset class="relative max-w-md">
      <Input v-model="inputValue" placeholder="Enter email" class="ps-11" />
      <InputIcon>
        <PhEnvelope :size="19" color="#AFBACA" />
      </InputIcon>
    </fieldset>
</template>`,
};

const labelInput = {
  "InputComponent.vue": `<script setup>
import { ref } from "vue";
import { Input, Label } from "keep-vue";

const inputValue = ref("");
console.log(inputValue.value);
</script>

<template>
  <fieldset class="max-w-md space-y-1 p-2">
    <Label for="name">Enter Name</Label>
    <Input
      id="name"
      v-model="inputValue"
      placeholder="Enter name"
      type="text" />
  </fieldset>
</template>`,
};

export {
  defaultInput,
  disabledInputCode,
  inputUseCasesCode,
  inputWithIconCode,
  labelInput,
};
