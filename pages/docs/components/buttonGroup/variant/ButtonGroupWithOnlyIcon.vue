<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from "@phosphor-icons/vue";
import Button from "~/src/components/Button/Button.vue";
import ButtonGroup from "~/src/components/ButtonGroup/ButtonGroup.vue";
</script>
<template>
  <ButtonGroup>
    <Button position="start" shape="icon">
      <PhCube size="{20}" />
    </Button>
    <Button position="center" shape="icon">
      <PhGear size="{20}" />
    </Button>
    <Button position="end" shape="icon">
      <PhChatCircleDots size="{20}" />
    </Button>
  </ButtonGroup>
</template>
