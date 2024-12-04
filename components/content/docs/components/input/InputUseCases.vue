<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Button, Input, InputIcon, Label } from "~/src";
import { inputUseCasesCode } from "./inputCode";

const email = ref("");
const password = ref("");

const handleSubmit = () => {};
</script>

<template>
  <CodeHighlightWithPreview :code="inputUseCasesCode">
    <div class="flex items-center justify-center">
      <form
        class="mx-auto w-full max-w-md space-y-2 rounded-lg border p-8 shadow-md"
        @submit.prevent="handleSubmit">
        <fieldset class="space-y-1">
          <Label for="name">Email*</Label>
          <div class="relative">
            <Input
              v-model="email"
              type="email"
              placeholder="Enter email"
              class="ps-11" />
            <InputIcon>
              <PhosphorIconEnvelope :size="19" color="#AFBACA" />
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
              class="ps-11" />
            <InputIcon>
              <PhosphorIconLock :size="19" color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <Button size="sm" color="secondary" type="submit">Sign In</Button>
      </form>
    </div>
  </CodeHighlightWithPreview>
</template>
