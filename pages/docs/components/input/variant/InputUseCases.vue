<script lang="ts" setup>
import { PhEnvelope, PhLock } from "@phosphor-icons/vue";
import { Button, Input, InputIcon, Label } from "~/src";
</script>

<template>
  <form class="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
    <fieldset class="space-y-1">
      <Label html-for="name">Email*</Label>
      <div class="relative">
        <Input placeholder="Enter email" class="ps-11" />
        <InputIcon>
          <PhEnvelope :size="19" color="#AFBACA" />
        </InputIcon>
      </div>
    </fieldset>
    <fieldset class="space-y-1">
      <Label html-for="password">Password*</Label>
      <div class="relative">
        <Input
          id="password"
          placeholder="Enter password"
          type="password"
          class="ps-11" />
        <InputIcon>
          <PhLock :size="19" color="#AFBACA" />
        </InputIcon>
      </div>
    </fieldset>
    <Button size="sm" color="secondary" type="submit">Sign In</Button>
  </form>
</template>
