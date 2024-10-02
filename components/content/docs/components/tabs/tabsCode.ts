const DefaultTabsCode = {
  "TabsComponent.vue": `<script setup>
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-vue";
</script>

<template>
  <Tabs default-active="item-5" class="mx-auto max-w-xl">
    <TabList>
      <TabItem value="item-5">Figma</TabItem>
      <TabItem value="item-6">Docs</TabItem>
      <TabItem value="item-7">Blog</TabItem>
      <TabItem value="item-8">Github</TabItem>
    </TabList>
    <TabContent value="item-5">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-6">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-7">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-8">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
  </Tabs>
</template>`,
};

const TabsFillCode = {
  "TabsComponent.vue": `<script setup>
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-vue";
</script>

<template>
  <Tabs variant="fill" default-active="1" class="mx-auto max-w-xl">
    <TabList>
      <TabItem value="1">
        <PhosphorIconUser :size="16" />
        Profile
      </TabItem>
      <TabItem value="2">
        <PhosphorIconGear :size="16" />
        Settings
      </TabItem>
      <TabItem value="3">
        <PhosphorIconBuildings :size="16" />
        Company
      </TabItem>
      <TabItem value="4">
        <PhosphorIconShieldWarning :size="16" />
        Privacy
      </TabItem>
    </TabList>
    <TabContent value="1">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="2">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="3">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="4">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
  </Tabs>
</template>`,
};

const TabsUnderlineCode = {
  "TabsComponent.vue": `<script setup>
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-vue";
</script>

<template>
  <Tabs variant="underline" default-active="5" class="mx-auto max-w-xl">
    <TabList>
      <TabItem value="5">
        <PhosphorIconUser :size="16" />
        Profile
      </TabItem>
      <TabItem value="6">
        <PhosphorIconGear :size="16" />
        Settings
      </TabItem>
      <TabItem value="7">
        <PhosphorIconBuildings :size="16" />
        Company
      </TabItem>
      <TabItem value="8">
        <PhosphorIconShieldWarning :size="16" />
        Privacy
      </TabItem>
    </TabList>
    <TabContent value="5">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="6">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="7">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="8">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
  </Tabs>
</template>`,
};

const TabsWithIconCode = {
  "TabsComponent.vue": `<script setup>
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-vue";
</script>

<template>
  <Tabs default-active="item-1" class="mx-auto max-w-xl">
    <TabList>
      <TabItem value="item-1">
        <PhosphorIconUser :size="16" />
        Profile
      </TabItem>
      <TabItem value="item-2">
        <PhosphorIconGear :size="16" />
        Settings
      </TabItem>
      <TabItem value="item-3">
        <PhosphorIconBuildings :size="16" />
        Company
      </TabItem>
      <TabItem value="item-4">
        <PhosphorIconShieldWarning :size="16" />
        Privacy
      </TabItem>
    </TabList>
    <TabContent value="item-1">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-2">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-3">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
    <TabContent value="item-4">
      <Skeleton class="max-w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </TabContent>
  </Tabs>
</template>
`,
};

export { DefaultTabsCode, TabsFillCode, TabsUnderlineCode, TabsWithIconCode };
