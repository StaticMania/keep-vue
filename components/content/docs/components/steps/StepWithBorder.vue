<script lang="ts" setup>
import { ref } from "vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { StepLine, StepPoint, Steps } from "~/src";
import { StepWithBorderCode } from "./stepCode";

const active = ref(1);
</script>

<template>
  <CodeHighlightWithPreview :code="StepWithBorderCode">
    <div class="space-y-6 p-6">
      <Steps class="">
        <StepPoint variant="border" class="px-3" :completed="active >= 1">
          <p class="text-body-4 font-medium">general info</p>
        </StepPoint>
        <StepLine :completed="active >= 2" />
        <StepPoint variant="border" class="px-3" :completed="active >= 2">
          <p class="text-body-4 font-medium">payment details</p>
        </StepPoint>
        <StepLine :completed="active >= 3" />
        <StepPoint variant="border" class="px-3" :completed="active >= 3">
          <p class="text-body-4 font-medium">benefits & extras</p>
        </StepPoint>
      </Steps>

      <Skeleton
        v-if="active === 1"
        :animation="false"
        class="w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
      <Skeleton
        v-if="active === 2"
        :animation="false"
        class="w-full space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
        <SkeletonLine class="h-4 w-9/12" />
      </Skeleton>
      <Skeleton
        v-if="active === 3"
        :animation="false"
        class="w-full space-y-2.5">
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>

      <div class="flex items-center justify-between">
        <Button :disabled="active === 1" @click="active--">Previous</Button>
        <Button :disabled="active === 3" @click="active++">Next Step</Button>
      </div>
    </div>
  </CodeHighlightWithPreview>
</template>
