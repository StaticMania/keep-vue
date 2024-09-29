const defaultButtonGroupCode = {
  "ButtonGroupComponent.vue": `<script setup>
import { ButtonGroup } from "keep-vue";
</script>
<template>
    <ButtonGroup>
      <Button position="start">Profile</Button>
      <Button position="center">Settings</Button>
      <Button position="end">Messages</Button>
    </ButtonGroup>
</template>
`,
};

const buttonGroupWithIconCode = {
  "ButtonGroupComponent.vue": `<script lang="ts" setup>
import { PhChatCircleDots, PhCube, PhGear } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "keep-vue";
</script>
<template>
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
        <PhChatCircleDots :size="24" class="mr-1.5" />
        Messages
      </Button>
    </ButtonGroup>
</template>
`,
};

const buttonGroupWithOnlyIconCode = {
  "ButtonGroupComponent.vue": `<script lang="ts" setup>
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
`,
};

export {
  buttonGroupWithIconCode,
  buttonGroupWithOnlyIconCode,
  defaultButtonGroupCode,
};
