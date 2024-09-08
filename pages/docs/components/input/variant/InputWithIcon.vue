<script lang="ts" setup>
import { PhEnvelope } from "@phosphor-icons/vue";
import { Input, InputIcon } from "~/src";
</script>

<template>
  <div class="p-2">
    <fieldset class="relative max-w-md">
      <Input placeholder="Enter email" class="ps-11" />
      <InputIcon>
        <PhEnvelope :size="19" color="#AFBACA" />
      </InputIcon>
    </fieldset>
  </div>
</template>
