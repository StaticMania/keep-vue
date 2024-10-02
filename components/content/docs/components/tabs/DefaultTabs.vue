<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "~/src";
import { DefaultTabsCode } from "./tabsCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultTabsCode">
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
  </CodeHighlightWithPreview>
</template>
