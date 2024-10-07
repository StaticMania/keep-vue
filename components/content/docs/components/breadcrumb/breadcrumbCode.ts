const defaultBreadcrumbCode = {
  "BreadcrumbComponent.vue": `<script setup>
import {  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage } from "keep-vue";
</script>

<template>
   <Breadcrumb>
      <BreadcrumbList>
      
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <PhosphorIconHouse :size="20" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/accordion" target="_">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
</template>
`,
};

const breadcrumbWithBorderCode = {
  "BreadcrumbComponent.vue": `<script setup>
import {Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage} from "keep-vue";
</script>
<template>
   <Breadcrumb>
        <BreadcrumbList border-type="border-xy">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <PhosphorIconHouse :size="20" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbList border-type="border-y">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <PhosphorIconHouse :size="20" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/accordion" target="_">
              Components
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
</template>`,
};

const BreadcrumbDividerIconCode = {
  "BreadcrumbComponent.vue": `<script setup>
import {Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage} from "keep-vue";
</script>
<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <PhosphorIconHouse :size="16" />
          <span>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbDivider />

      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <PhosphorIconAirplay :size="16" />
          <span>Products</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbDivider />

      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <PhosphorIconCircuitry :size="16" />
          <span>Electronics</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbDivider />

      <BreadcrumbItem>
        <BreadcrumbPage>
          <PhosphorIconLaptop :size="16" />
          <span>Laptop</span>
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
`,
};

const BreadcrumbWithEllipsisCode = {
  "BreadcrumbComponent.vue": `<script setup>

import { Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage } from "keep-vue";
</script>
<template>
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <PhosphorIconHouse :size="20" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbLink>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
</template>`,
};

const BreadcrumbActiveBarOutlineCode = {
  "BreadcrumbComponent.vue": `<script setup>
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "keep-vue";
</script>

<template>
  <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink><PhosphorIconHouse :size="20" /></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Overview</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Token</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink><PhosphorIconHouse :size="20" /></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Overview</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbLink>Token</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbDivider />

        <BreadcrumbItem>
          <BreadcrumbPage outline>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
</template>`,
};

export {
  BreadcrumbActiveBarOutlineCode,
  BreadcrumbDividerIconCode,
  BreadcrumbWithEllipsisCode,
  breadcrumbWithBorderCode,
  defaultBreadcrumbCode,
};
