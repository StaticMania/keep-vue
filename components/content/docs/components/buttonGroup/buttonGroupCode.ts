const defaultButtonGroupCode = {
  "ButtonGroupComponent.vue": `<script setup>
import { Button, ButtonGroup } from 'keep-vue'
</script>
<template>
  <ButtonGroup>
        <Button variant="outline" color="secondary" position="start">
          Profile
        </Button>
        <Button variant="outline" color="secondary" position="center">
          Message
        </Button>
        <Button variant="outline" color="secondary" position="end">
          Setting
        </Button>
      </ButtonGroup>
</template>`,
};

const buttonGroupWithIconCode = {
  "ButtonGroupComponent.vue": `<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "keep-vue";
</script>
<template>
      <ButtonGroup>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="start">
          <PhCube :size="20" class="mr-1.5" />
          Profile
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="center">
          <PhGear :size="20" class="mr-1.5" />
          Settings
        </Button>
        <Button
          variant="outline"
          class="flex items-center gap-x-1 border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="end">
          <PhChatCircleDots :size="24" class="mr-1.5" />
          Messages
        </Button>
      </ButtonGroup>
</template>
`,
};

const buttonGroupWithOnlyIconCode = {
  "ButtonGroupComponent.vue": `<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from '@phosphor-icons/vue'
import { Button, ButtonGroup } from 'keep-vue'
</script>
<template>
   <ButtonGroup>
        <Button
          variant="outline"
          class="border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="start"
          shape="icon">
          <PhCube :size="20" />
        </Button>
        <Button
          variant="outline"
          class="border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="center"
          shape="icon">
          <PhGear :size="20" />
        </Button>
        <Button
          variant="outline"
          class="border-metal-300 text-metal-600 dark:border-metal-400 dark:text-metal-300"
          position="end"
          shape="icon">
          <PhChatCircleDots :size="20" />
        </Button>
      </ButtonGroup>
</template>`,
};

export {
  buttonGroupWithIconCode,
  buttonGroupWithOnlyIconCode,
  defaultButtonGroupCode,
};
