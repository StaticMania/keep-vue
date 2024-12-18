const DefaultStepCode = {
  "StepsComponent.vue": `<script setup>
import { ref } from "vue";
import { PhHourglass, PhRecycle, PhGear, PhPackage } from "@phosphor-icons/vue";

import {
  Button,
  Skeleton,
  SkeletonLine,
  StepLine,
  StepPoint,
  Steps,
} from "keep-vue";

const active = ref(1);
</script>

<template>
  <div class="space-y-6 p-6">
    <Steps>
      <StepPoint :completed="active >= 1">
        <p
          class="flex size-5 items-center justify-center rounded-full border border-current text-body-5 font-medium">
          1
        </p>
        <p class="text-body-4 font-medium">general info</p>
      </StepPoint>
      <StepLine :completed="active >= 2" />

      <StepPoint :completed="active >= 2">
        <p
          class="flex size-5 items-center justify-center rounded-full border border-current text-body-5 font-medium">
          2
        </p>
        <p class="text-body-4 font-medium">payment details</p>
      </StepPoint>
      <StepLine :completed="active >= 3" />
      <StepPoint :completed="active >= 3">
        <p
          class="flex size-5 items-center justify-center rounded-full border border-current text-body-5 font-medium">
          3
        </p>
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
</template>`,
};

const StepWithBorderCode = {
  "StepsComponent.vue": `<script setup>
import { ref } from "vue";
import {Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from "keep-vue";

const active = ref(1);
</script>

<template>
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
</template>`,
};

const StepWithIconCode = {
  "StepsComponent.vue": `<script setup>
import { ref } from "vue";
import { Button, Skeleton, SkeletonLine, StepLine, StepPoint, Steps } from "keep-vue";

const active = ref(1);
</script>

<template>
  <div class="space-y-6 p-6">
    <Steps>
      <StepPoint variant="icon" :completed="active >= 1">
        <PhHourglass :size="20" weight="bold" />
      </StepPoint>
      <StepLine :completed="active >= 2" />
      <StepPoint variant="icon" :completed="active >= 2">
        <PhRecycle :size="20" weight="bold" />
      </StepPoint>
      <StepLine :completed="active >= 3" />
      <StepPoint variant="icon" :completed="active >= 3">
        <PhGear :size="20" weight="bold" />
      </StepPoint>
      <StepLine :completed="active >= 4" />
      <StepPoint variant="icon" :completed="active >= 4">
        <PhPackage :size="20" weight="bold" />
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
      <Button :disabled="active === 4" @click="active++">Next Step</Button>
    </div>
  </div>
</template>`,
};

export { DefaultStepCode, StepWithBorderCode, StepWithIconCode };
