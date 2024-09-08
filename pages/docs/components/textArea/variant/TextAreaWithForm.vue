<script lang="ts" setup>
import { PhEnvelope } from "@phosphor-icons/vue";
import { Button, Input, InputIcon, Label, Textarea } from "~/src";
</script>

<template>
  <form
    class="mx-auto max-w-md space-y-3 rounded-md border border-metal-100 p-6 dark:border-metal-800">
    <fieldset class="space-y-1">
      <Label html-for="email">Email*</Label>
      <div class="relative">
        <Input id="email" placeholder="Enter email" class="ps-11" />
        <InputIcon>
          <PhEnvelope :size="19" color="#AFBACA" />
        </InputIcon>
      </div>
    </fieldset>
    <fieldset class="space-y-1">
      <Label html-for="m1">Message*</Label>
      <Textarea id="m1" placeholder="Write your message here" :rows="8" />
    </fieldset>
    <Button size="sm" color="secondary" type="submit" class="w-full">
      Send Message
    </Button>
  </form>
</template>
