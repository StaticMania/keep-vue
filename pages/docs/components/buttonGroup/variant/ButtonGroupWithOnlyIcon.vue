<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "~/src";
</script>
<template>
  <ButtonGroup>
    <Button position="start" shape="icon">
      <PhCube :size="20" />
    </Button>
    <Button position="center" shape="icon">
      <PhGear :size="20" />
    </Button>
    <Button position="end" shape="icon">
      <PhChatCircleDots :size="20" />
    </Button>
  </ButtonGroup>
</template>
