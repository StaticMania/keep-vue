const defaultTextAreaCode = {
  "TextareaComponent.vue": `<script setup>
import { ref } from "vue";
import { Textarea } from "keep-vue";
const message = ref("");
console.log(message.value);
</script>

<template>
    <Textarea
      v-model="message" 
      class="rounded-2xl"
      placeholder="Write your message here."
      :rows="8" />
</template>`,
};

const disabledTextareaCode = {
  "TextareaComponent.vue": `<script setup>
import { Textarea } from "keep-vue";
</script>

<template>
    <Textarea
        disabled
        placeholder="Write your message here"
        :rows="8"
        class="rounded-2xl" />
</template>`,
};

const TextAreaWithFormCode = {
  "TextareaComponent.vue": `<script setup>
import { PhEnvelope } from "@phosphor-icons/vue";
import { ref } from "vue";
import { Button, Input, InputIcon, Label, Textarea } from "keep-vue";
const inputValue = ref("");
const textAreaValue = ref("");

const handleSubmit = (event) => {
  console.log("Email:", inputValue.value);
  console.log("Message:", textAreaValue.value);
};
</script>

<template>
  <form
      class="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6 dark:border-metal-800"
      @submit.prevent="handleSubmit">
      <fieldset class="space-y-1">
        <Label for="email">Email*</Label>
        <div class="relative">
          <Input
            id="email"
            v-model="inputValue"
            type="email"
            placeholder="Enter email"
            class="ps-11" />
          <InputIcon>
            <PhEnvelope :size="19" color="#AFBACA" />
          </InputIcon>
        </div>
      </fieldset>
      <fieldset class="space-y-1">
        <Label for="m1">Message*</Label>
        <Textarea
          id="m1"
          v-model="textAreaValue"
          placeholder="Write your message here"
          :rows="8"
          class="rounded-2xl" />
      </fieldset>
      <Button size="sm" color="secondary" type="submit" class="!mt-5 w-full">
        Send Message
      </Button>
    </form>
</template>`,
};

const TextAreaWithHelperTextCode = {
  "TextareaComponent.vue": `<script setup>
import { ref } from "vue";
import { Label, Textarea } from "keep-vue";
const picked = ref("");

console.log(picked.value);
</script>

<template>
  <fieldset class="space-y-1.5 p-2">
    <Label for="message">Your message*</Label>
        <Textarea
        id="message"
        v-model="picked"
        placeholder="Write your message here"
        :rows="8"
        class="rounded-2xl" />
    <p class="text-body-4 font-normal text-metal-300">
      Message must be a at least 100 words.
    </p>
  </fieldset>
</template>
`,
};

export {
  defaultTextAreaCode,
  disabledTextareaCode,
  TextAreaWithFormCode,
  TextAreaWithHelperTextCode,
};
