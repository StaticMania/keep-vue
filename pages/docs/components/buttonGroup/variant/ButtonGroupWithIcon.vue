<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from "@phosphor-icons/vue";
import Button from "~/src/components/Button/Button.vue";
import ButtonGroup from "~/src/components/ButtonGroup/ButtonGroup.vue";
</script>
<template>
  <div class="h-20 p-4">
    <ButtonGroup>
      <Button position="start">
        <PhCube :size="20" class="mr-1.5" />
        Profile
      </Button>
      <Button position="center">
        <PhGear :size="20" class="mr-1.5" />
        Settings
      </Button>
      <Button position="end">
        <PhChatCircleDots size="{24}" class="mr-1.5" />
        Messages
      </Button>
    </ButtonGroup>
  </div>
</template>
