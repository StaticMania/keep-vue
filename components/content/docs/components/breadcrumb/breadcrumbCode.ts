const defaultBreadcrumbCode = {
  "BreadcrumbComponent.vue": `<script setup>
import { PhCaretRight } from "@phosphor-icons/vue";
import { Breadcrumb, BreadcrumbItem } from "keep-vue";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem>Overview</BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Pools
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Token
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretRight :size="18" color="#455468" />
      Colors
    </BreadcrumbItem>
  </Breadcrumb>
</template>
`,
};

const breadcrumbWithBorderCode = {
  "BreadcrumbComponent.vue": `<script setup>
import { PhCaretRight, PhHouseLine } from "@phosphor-icons/vue";
import { Breadcrumb, BreadcrumbItem } from "keep-vue";
</script>
<template>
 
    <Breadcrumb border-type="border-xy">
      <BreadcrumbItem>
        <PhHouseLine :size="18" color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Overview
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb border-type="border-y">
      <BreadcrumbItem>
        <PhHouseLine :size="18" color="#455468" />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Overview
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Pools
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Token
      </BreadcrumbItem>
      <BreadcrumbItem>
        <PhCaretRight :size="18" color="#455468" />
        Colors
      </BreadcrumbItem>
    </Breadcrumb>
 
</template>
`,
};

const BreadcrumbDividerIconCode = {
  "BreadcrumbComponent.vue": `<script setup>
import { PhCaretDoubleRight, PhHouseLine } from "@phosphor-icons/vue";
import { Breadcrumb, BreadcrumbItem } from "keep-vue";
</script>
<template>
  <Breadcrumb border-type="border-y">
    <BreadcrumbItem>
      <PhHouseLine :size="18" color="#455468" />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Overview
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Pools
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Token
    </BreadcrumbItem>
    <BreadcrumbItem>
      <PhCaretDoubleRight :size="18" color="#455468" />
      Colors
    </BreadcrumbItem>
  </Breadcrumb>
</template>
`,
};

export {
  BreadcrumbDividerIconCode,
  breadcrumbWithBorderCode,
  defaultBreadcrumbCode,
};
