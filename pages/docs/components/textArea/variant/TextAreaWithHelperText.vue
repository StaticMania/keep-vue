<script lang="ts" setup>
import { Label, Textarea } from "~/src";
</script>

<template>
  <fieldset className="space-y-1.5 p-2">
    <Label html-for="message">Your message*</Label>
    <Textarea id="message" placeholder="Write your message here" :rows="8" />
    <p className="text-body-4 font-normal text-metal-300">
      Message must be a at least 100 words.
    </p>
  </fieldset>
</template>
