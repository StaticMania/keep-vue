const buttonOutlineVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
    <>
      <Button color="secondary" variant="outline">Button</Button>
    </>
</template>`,
};
const buttonLinkVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
    <>
    <Button color="primary" variant="link">Button</Button>
    </>
</template>`,
};

const buttonColorVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
   <Button color="secondary">Button</Button>
</template>`,
};

const buttonPrimaryCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
  <Button color="primary">Button</Button>
</template>`,
};

const buttonShapeVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { PhShoppingCart } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
   <Button shape="icon" color="secondary">
     <PhosphorIconShoppingCart size="16" />
   </Button>
      
  <Button shape="circle" color="success">
    <PhosphorIconShoppingCart size="16" />
  </Button>
</template>`,
};

const buttonSizeVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>  
    <Button size="sm" color="error">Small Button</Button>
</template>
      `,
};

const buttonWithIconCode = {
  "ButtonComponent.vue": `<script setup>
import { PhChatText, PhGear, PhSignIn } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
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
</template>
      `,
};

const buttonRadiusVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
   <Button radius="full" color="warning">
        <PhosphorIconShoppingCart size="16" />
        Add to cart
      </Button>
</template>
      `,
};

export {
  buttonColorVariantCode,
  buttonLinkVariantCode,
  buttonOutlineVariantCode,
  buttonPrimaryCode,
  buttonRadiusVariantCode,
  buttonShapeVariantCode,
  buttonSizeVariantCode,
  buttonWithIconCode,
};
