const DefaultPaginationCode = {
  "PaginationComponent.vue": `<script setup>
import { PhDotsThree } from "@phosphor-icons/vue";
import { Pagination, PaginationItem, PaginationList } from "keep-vue";

const activePage = ref(1);
const handlePageClick = (pageNumber) => {
  activePage.value = pageNumber;
};
</script>
<template>
   <Pagination class="w-auto">
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
      </Pagination>
</template>
`,
};

const PaginationNavigatorWithIconCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import {Pagination, PaginationItem, PaginationList, PaginationNavigator} from "keep-vue";

const activePage = ref(1);
const handlePageClick = (pageNumber) => {
  activePage.value = pageNumber;
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < 4) {
    activePage.value += 1;
  }
};

const prevPage = () => {
  if (activePage.value === 10) {
    activePage.value = 4;
  } else if (activePage.value > 1) {
    activePage.value -= 1;
  }
};
</script>

<template>
  <Pagination shape="circle" class="w-auto">
        <PaginationNavigator
          shape="circle"
          :disabled="activePage === 1"
          @click="prevPage">
          <PhCaretLeft size="18" />
        </PaginationNavigator>
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
        <PaginationNavigator
          shape="circle"
          :disabled="activePage === 10"
          @click="nextPage">
          <PhCaretRight size="18" />
        </PaginationNavigator>
      </Pagination>
</template>`,
};

const PaginationNavigatorWithTextCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { Pagination, PaginationItem, PaginationList, PaginationNavigator} from "keep-vue";

const activePage = ref<number>(1);

const handlePageClick = (pageNumber: number) => {
  activePage.value = pageNumber;
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < 10) {
    activePage.value += 1;
  }
};

const prevPage = () => {
  if (activePage.value === 10) {
    activePage.value = 4;
  } else if (activePage.value > 1) {
    activePage.value -= 1;
  }
};
</script>
<template>
   <Pagination shape="rounded" class="w-auto">
        <PaginationNavigator
          :disabled="activePage === 1"
          class="gap-1"
          @click="prevPage">
          <PhCaretLeft size="18" />
          Previous
        </PaginationNavigator>
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
        <PaginationNavigator
          :disabled="activePage === 10"
          class="gap-1"
          @click="nextPage">
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

const activePage = ref(1);
const handlePageClick = (pageNumber) => {
  activePage.value = pageNumber;
};

</script>
<template>
   <Pagination shape="circle" class="w-auto">
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
      </Pagination>
</template>`,
};

const PaginationWithInputCode = {
  "PaginationComponent.vue": `<script setup>
import { PhCaretLeft, PhCaretRight, PhDotsThree } from "@phosphor-icons/vue";
import { Input, Pagination, PaginationGoTo, PaginationItem, PaginationList, PaginationNavigator,} from "keep-vue";

const activePage = ref(1);
const inputPage = ref("");
const totalPages = 200;

const handlePageClick = (pageNumber) => {
  activePage.value = pageNumber;
  inputPage.value = "";
};

const nextPage = () => {
  if (activePage.value === 4) {
    activePage.value = 10;
  } else if (activePage.value < totalPages) {
    activePage.value += 1;
  }
  inputPage.value = "";
};

const prevPage = () => {
  if (activePage.value === 10) {
    activePage.value = 4;
  } else if (activePage.value > 1) {
    activePage.value -= 1;
  }
  inputPage.value = "";
};

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  inputPage.value = value;
};

const handleGoToPage = () => {
  const page = parseInt(inputPage.value);
  if (page && page >= 1 && page <= totalPages) {
    activePage.value = page;
    inputPage.value = "";
  } else {
    inputPage.value = "";
  }
};
</script>
<template>
   <Pagination shape="circle" class="w-auto">
        <PaginationNavigator
          shape="circle"
          :disabled="activePage === 1"
          @click="prevPage">
          <PhCaretLeft size="18" />
        </PaginationNavigator>
        <PaginationList>
          <PaginationItem
            :active="activePage === 1"
            @click="handlePageClick(1)">
            1
          </PaginationItem>
          <PaginationItem
            :active="activePage === 2"
            @click="handlePageClick(2)">
            2
          </PaginationItem>
          <PaginationItem
            :active="activePage === 3"
            @click="handlePageClick(3)">
            3
          </PaginationItem>
          <PaginationItem
            :active="activePage === 4"
            @click="handlePageClick(4)">
            4
          </PaginationItem>
          <PaginationItem>
            <PhDotsThree size="20" />
          </PaginationItem>
          <PaginationItem
            :active="activePage === 10"
            @click="handlePageClick(10)">
            10
          </PaginationItem>
        </PaginationList>
        <PaginationNavigator
          shape="circle"
          :disabled="activePage === totalPages"
          @click="nextPage">
          <PhCaretRight size="18" />
        </PaginationNavigator>
        <PaginationGoTo>
          <span>/ Go to</span>
          <Input
            v-model="inputPage"
            placeholder="Enter Number"
            type="number"
            class="h-9 w-[60px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
            @input="handleInputChange"
            @keyup.enter="handleGoToPage" />
          <span>of {{ totalPages }}</span>
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
