const DefaultPaginationCode = {
  "PaginationComponent.vue": `<script setup>
import { PhDotsThree } from "@phosphor-icons/vue";
import { Pagination, PaginationItem, PaginationList } from "keep-vue";
</script>
<template>
  <Pagination>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
  </Pagination>
</template>
`,
};

const PaginationNavigatorWithIconCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "keep-vue";
</script>
<template>
  <Pagination shape="circle">
    <PaginationNavigator shape="circle">
      <PhCaretLeft size="18" />
    </PaginationNavigator>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
    <PaginationNavigator shape="circle">
      <PhCaretRight size="18" />
    </PaginationNavigator>
  </Pagination>
</template>`,
};

const PaginationNavigatorWithTextCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "keep-vue";
</script>
<template>
  <Pagination shape="rounded">
    <PaginationNavigator>
      <PhCaretLeft size="18" />
      Previous
    </PaginationNavigator>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
    <PaginationNavigator>
      Next
      <PhCaretRight size="18" />
    </PaginationNavigator>
  </Pagination>
</template>`,
};

const PaginationShapeCode = {
  "PaginationComponent.vue": `<script setup>
import { PhDotsThree } from "@phosphor-icons/vue";
import { Pagination, PaginationItem, PaginationList } from "keep-vue";
</script>
<template>
  <Pagination shape="circle">
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
  </Pagination>
</template>`,
};
const PaginationWithInputCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {
  Input,
  Pagination,
  PaginationGoTo,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "~/src";
</script>
<template>
  <Pagination shape="circle">
    <PaginationNavigator shape="circle">
      <PhCaretLeft size="18" />
    </PaginationNavigator>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem active>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>
        <PhDotsThree size="20" />
      </PaginationItem>
      <PaginationItem>10</PaginationItem>
    </PaginationList>
    <PaginationNavigator shape="circle">
      <PhCaretRight size="18" />
    </PaginationNavigator>
    <PaginationGoTo>
      <span>/ Go to</span>
      <Input
        type="number"
        class="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
        value="20" />
      <span>of 200</span>
    </PaginationGoTo>
  </Pagination>
</template>`,
};

export {
  DefaultPaginationCode,
  PaginationNavigatorWithIconCode,
  PaginationNavigatorWithTextCode,
  PaginationShapeCode,
  PaginationWithInputCode,
};
