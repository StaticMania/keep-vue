const CustomDropdownCode = {
  "DropdownComponent.vue": `<script setup>
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownGroup,
} from "keep-vue";

const dropdownData = [
  {
    id: 1,
    img: "/images/avatar/avatar-1.png",
    name: "Atique Hasan",
    title: "CEO of StaticMania",
  },
  {
    id: 2,
    img: "/images/avatar/avatar-2.png",
    name: "Kausar Ahamed Pial",
    title: "CTO of StaticMania",
  },
  {
    id: 3,
    img: "/images/avatar/avatar-3.png",
    name: "Md Ariful Islam",
    title: "Web Developer",
  },
  {
    id: 4,
    img: "/images/avatar/avatar-4.png",
    name: "Moshiur Rahman",
    title: "Web Developer",
  },
  {
    id: 5,
    img: "/images/avatar/avatar-5.png",
    name: "Md Zahid Hasan",
    title: "Web Developer",
  },
];
</script>

<template>
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownGroup>
          <DropdownItem v-for="data in dropdownData" :key="data.id">
            <div>
              <Avatar>
                <AvatarImage :src="data.img" />
                <AvatarFallback>{{data.name}}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p class="text-body-4 font-medium text-metal-900 dark:text-white">
                {{ data.name }}
              </p>
              <p
                class="text-body-5 font-normal text-metal-400 dark:text-metal-500">
                {{ data.title }}
              </p>
            </div>
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
</template>`,
};

const dropdownWithCheckboxCode = {
  "DropdownComponent.vue": `<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from "radix-vue";

import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownLabel,
} from "keep-vue";

type Checked = DropdownMenuCheckboxItemProps["checked"];
const selectReact = ref<Checked>(true);
const selectVue = ref<Checked>(false);
const selectAngular = ref<Checked>(false);
</script>

<template>
      <Dropdown>
        <DropdownAction as-child>
          <Button>Select a framework</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownLabel>Select a framework</DropdownLabel>
          <DropdownArrow />
          <DropdownCheckboxItem v-model:checked="selectReact">
            ReactJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem v-model:checked="selectVue">
            VueJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem v-model:checked="selectAngular">
            Angular JS
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
</template>
`,
};
const DefaultDropdownCode = {
  "DropdownComponent.vue": `<script setup>
import {
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownGroup,
  
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
       <DropdownContent align="center">
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
    </Dropdown>
  </div>
</template>`,
};

const dropdownWithRadioCode = {
  "DropdownComponent.vue": `<script lang="ts" setup>
import {ref} from "vue";
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from "keep-vue";
import { DefaultDropdownCode } from "./dropdownCode";
const role = ref("softwareDeveloper");

</script>

<template>
      <Dropdown>
        <DropdownAction as-child>
          <Button>Choose a role</Button>
        </DropdownAction>
        <DropdownContent align="center">
          <DropdownLabel>Select a role</DropdownLabel>
          <DropdownRadioGroup v-model="role">
            <DropdownRadioItem value="softwareDeveloper">
              Software Developer
            </DropdownRadioItem>
            <DropdownRadioItem value="mlEngineer">
              ML Engineer
            </DropdownRadioItem>
            <DropdownRadioItem value=" dataScientist">
              Data Scientist
            </DropdownRadioItem>
            <DropdownRadioItem value="productManager">
              Product Manager
            </DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
</template>
`,
};
const dropdownWithSubmenuCode = {
  "DropdownComponent.vue": `<script lang="ts" setup>
import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from "keep-vue";
</script>

<template>
      <Dropdown>
        <DropdownAction as-child>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          <DropdownGroup>
            <DropdownItem>
              <PhosphorIconUsers :size="20" />
              Profile
            </DropdownItem>
            <DropdownSub>
              <DropdownSubAction>
                <p className="flex items-center gap-2 text-body-4 font-medium ">
                  <PhosphorIconGlobe :size="20" />
                  Language
                </p>
              </DropdownSubAction>
              <DropdownSubContent>
                <DropdownItem>Bangla</DropdownItem>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>French</DropdownItem>
              </DropdownSubContent>
            </DropdownSub>
            <DropdownItem>
              <PhosphorIconGear :size="20" />
              Settings
            </DropdownItem>
            <DropdownItem>
              <PhosphorIconSignOut :size="20" />
              Logout
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
</template>`,
};

const DropdownWithIconCode = {
  "DropdownComponent.vue": `<script setup>
import {
  PhChartPieSlice,
  PhCopy,
  PhPen,
  PhPhone,
  PhSignOut,
  PhUserCircle,
  PhUsers,
} from "@phosphor-icons/vue";
import {
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownGroup,
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownGroup>
          <DropdownItem>
            <PhUsers :size="20" />
            Contacts
          </DropdownItem>
          <DropdownItem>
            <PhPhone :size="20" />
            Phone
          </DropdownItem>
          <DropdownItem>
            <PhChartPieSlice :size="20" />
            Statistics
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <PhPen :size="20" />
            Rename
          </DropdownItem>
          <DropdownItem>
            <PhCopy :size="20" />
            Duplicate
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <PhUserCircle :size="20" />
            Account
          </DropdownItem>
          <DropdownItem>
            <PhSignOut :size="20" />
            Logout
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  </div>
</template>`,
};

const DropdownWithArrowIconCode = {
  "DropdownComponent.vue": `<script setup>
import {
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownGroup,
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
       <DropdownContent class="border-0">
        <DropdownGroup>
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownGroup>
         <DropdownArrow />
      </DropdownContent>
    </Dropdown>
  </div>
</template>`,
};

export {
  CustomDropdownCode,
  DefaultDropdownCode,
  DropdownWithArrowIconCode,
  dropdownWithCheckboxCode,
  DropdownWithIconCode,
  dropdownWithRadioCode,
  dropdownWithSubmenuCode,
};
