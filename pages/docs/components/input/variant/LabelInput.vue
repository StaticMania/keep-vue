<script lang="ts" setup>
import { Input, Label } from "~/src";
</script>

<template>
  <fieldset class="max-w-md space-y-1 p-2">
    <Label html-for="name">Enter Name</Label>
    <Input id="name" placeholder="Enter name" type="text" />
  </fieldset>
</template>
