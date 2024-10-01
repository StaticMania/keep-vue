<script lang="ts" setup>
import { StepPoint, Steps } from "~/src";

const active = ref(1);
</script>

<template>
  <div class="space-y-6 p-6">
    <Steps>
      <StepPoint variant="icon" :completed="active >= 1">
        <PhHourglass :size="20" />
      </StepPoint>
      <StepLine :completed="active >= 2" />
      <StepPoint variant="icon" :completed="active >= 2">
        <PhRecycle :size="20" />
      </StepPoint>
      <StepLine :completed="active >= 3" />
      <StepPoint variant="icon" :completed="active >= 3">
        <PhGear :size="20" />
      </StepPoint>
      <StepLine :completed="active >= 4" />
      <StepPoint variant="icon" :completed="active >= 4">
        <PhPackage :size="20" />
      </StepPoint>
    </Steps>
    <Skeleton :animation="false" class="w-full space-y-2.5">
      <SkeletonLine class="h-4 w-11/12" />
      <SkeletonLine class="h-4 w-9/12" />
      <SkeletonLine class="h-4 w-10/12" />
      <SkeletonLine class="h-4 w-7/12" />
    </Skeleton>
    <div class="flex items-center justify-between">
      <Button :disabled="active === 1" @click="active--">Previous</Button>
      <Button :disabled="active === 4" @click="active++">Next Step</Button>
    </div>
  </div>
</template>
