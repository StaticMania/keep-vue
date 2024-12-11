const defaultBadgeCode = {
  "BadgeComponent.vue": `<script setup>
import { Badge } from "keep-vue";
</script>

<template>
  <Badge variant="base" color="primary">Default Badge</Badge>
</template>
`,
};

const colorsOfBadgeCode = {
  "BadgeComponent.vue": `<script setup>
import { Badge } from "keep-vue";
</script>

<template>
     <Badge variant="base" color="primary">Primary</Badge>
     <Badge variant="base" color="secondary">Secondary</Badge>
     <Badge variant="base" color="success">Success</Badge>
     <Badge variant="base" color="warning">Warning</Badge>
     <Badge variant="base" color="error">Error</Badge>
</template>
`,
};

const variantOfBadgeCode = {
  "BadgeComponent.vue": `<script setup>
import { Badge } from "keep-vue";
</script>

<template>
    <>
      <Badge variant="base" color="primary">Primary</Badge>
      <Badge variant="base" color="secondary">Secondary</Badge>
      <Badge variant="base" color="success">Success</Badge>
      <Badge variant="base" color="warning">Warning</Badge>
      <Badge variant="base" color="error">Error</Badge>
    </>

    <>
      <Badge variant="border" color="primary">Primary</Badge>
      <Badge variant="border" color="secondary">Secondary</Badge>
      <Badge variant="border" color="success">Success</Badge>
      <Badge variant="border" color="warning">Warning</Badge>
      <Badge variant="border" color="error">Error</Badge>
    </>

    <>
      <Badge variant="background" color="primary">Primary</Badge>
      <Badge variant="background" color="secondary">Secondary</Badge>
      <Badge variant="background" color="success">Success</Badge>
      <Badge variant="background" color="warning">Warning</Badge>
      <Badge variant="background" color="error">Error</Badge>
    </>
</template>
`,
};

export { colorsOfBadgeCode, defaultBadgeCode, variantOfBadgeCode };
