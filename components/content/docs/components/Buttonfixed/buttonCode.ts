const buttonVariantTypeCode = {
  "ButtonComponent.Vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
    <>
      <Button color="primary" variant="outline">Button</Button>
      <Button color="secondary" variant="outline">Button</Button>
      <Button color="success" variant="outline">Button</Button>
      <Button color="warning" variant="outline">Button</Button>
      <Button color="error" variant="outline">Button</Button>
    </>
    
    <>
      <Button color="primary" variant="link">Button</Button>
      <Button color="secondary" variant="link">Button</Button>
      <Button color="success" variant="link">Button</Button>
      <Button color="warning" variant="link">Button</Button>
      <Button color="error" variant="link">Button</Button>
    </>
</template>
      `,
};

const buttonColorVariantCode = {
  "ButtonComponent.Vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
  <>
    <Button color="primary">Button</Button>
    <Button color="secondary">Button</Button>
    <Button color="success">Button</Button>
    <Button color="warning">Button</Button>
    <Button color="error">Button</Button>
  </>
</template>
      `,
};

const buttonShapeVariantCode = {
  "ButtonComponent.Vue": `<script setup>
import { PhShoppingCart } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
  <>
    <Button shape="icon"><PhShoppingCart size="16" /></Button>
    <Button shape="circle"><PhShoppingCart size="16" /></Button>
  </>
</template>
      `,
};

const buttonSizeVariantCode = {
  "ButtonComponent.Vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
  <>
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small Button</Button>
    <Button size="md">Medium Button</Button>
    <Button size="lg">Large Button</Button>
    <Button size="xl">Extra Large</Button>
    <Button size="2xl">Button 2xl</Button>
  </>
</template>
      `,
};

const buttonWithIconCode = {
  "ButtonComponent.Vue": `<script setup>
import { PhChatText, PhGear, PhSignIn } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
  <>
    <Button>
      <PhChatText size="20" class="mr-1.5" />
      Messages
    </Button>
    <Button>
      <PhGear size="20" class="mr-1.5" />
      Settings
    </Button>
    <Button>
      <PhSignIn size="20" class="mr-1.5" />
      Sign In
    </Button>
  </>
</template>
      `,
};

export {
  buttonColorVariantCode,
  buttonShapeVariantCode,
  buttonSizeVariantCode,
  buttonVariantTypeCode,
  buttonWithIconCode,
};
