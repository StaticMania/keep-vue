const buttonOutlineVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
     <Button color="secondary" variant="outline">Add to Wishlist</Button>
</template>`,
};
const buttonLinkVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
    <Button color="primary" variant="link">Click here</Button>
</template>`,
};

const buttonSoftBgVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>
<template>
    <Button color="primary" variant="softBg">Click here</Button>
</template>`,
};

const buttonColorVariantCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
    <Button color="success">Submit</Button>
</template>`,
};

const buttonPrimaryCode = {
  "ButtonComponent.vue": `<script setup>
import { Button } from "keep-vue";
</script>

<template>
  <Button color="primary">Login</Button>
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
      <Button size="sm" color="error">Delete</Button>
</template>
      `,
};

const ButtonWithLeftSideIcon = {
  "ButtonComponent.vue": `<script setup>
import { WarningCircle, CheckCircle, Trash } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
     <Button color="warning">
        <PhosphorIconWarningCircle size="20" class="mr-1.5" />
        Report
      </Button>
      <Button color="success">
        <PhosphorIconCheckCircle size="20" class="mr-1.5" />
        Approve
      </Button>
      <Button color="error">
        <PhosphorIconTrash size="20" class="mr-1.5" />
        Delete
      </Button>
</template>
      `,
};

const ButtonWithRightSideIcon = {
  "ButtonComponent.vue": `<script setup>
import { PencilSimpleLine, ShareNetwork, DownloadSimple } from "@phosphor-icons/vue";
import { Button } from "keep-vue";
</script>
<template>
      <Button>
        Edit
        <PhosphorIconPencilSimpleLine size="20" class="ml-1.5" />
      </Button>
      <Button color="secondary">
        Share
        <PhosphorIconShareNetwork size="20" class="ml-1.5" />
      </Button>
      <Button color="error">
        Download
        <PhosphorIconDownloadSimple size="20" class="ml-1.5" />
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
</template>`,
};

export {
  buttonColorVariantCode,
  buttonLinkVariantCode,
  buttonOutlineVariantCode,
  buttonPrimaryCode,
  buttonRadiusVariantCode,
  buttonShapeVariantCode,
  buttonSizeVariantCode,
  buttonSoftBgVariantCode,
  ButtonWithLeftSideIcon,
  ButtonWithRightSideIcon,
};
