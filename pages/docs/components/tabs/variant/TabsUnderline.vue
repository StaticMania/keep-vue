<script lang="ts" setup>
import {
  PhBuildings,
  PhGear,
  PhShieldWarning,
  PhUser,
} from "@phosphor-icons/vue";
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "~/src";
</script>

<template>
  <Tabs variant="underline" default-active="5" class="mx-auto max-w-xl">
    <TabList>
      <TabItem value="5">
        <PhUser :size="16" />
        Profile
      </TabItem>
      <TabItem value="6">
        <PhGear :size="16" />
        Settings
      </TabItem>
      <TabItem value="7">
        <PhBuildings :size="16" />
        Company
      </TabItem>
      <TabItem value="8">
        <PhShieldWarning :size="16" />
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
</template>
