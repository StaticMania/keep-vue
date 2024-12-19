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
  DropdownList,
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
        <DropdownList>
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
        </DropdownList>
        <DropdownArrow />
      </DropdownContent>
    </Dropdown>
</template>`,
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
  DropdownList,
  
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownList>
        <DropdownArrow />
      </DropdownContent>
    </Dropdown>
  </div>
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
  DropdownList,
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
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
        </DropdownList>
        <DropdownArrow />
      </DropdownContent>
    </Dropdown>
  </div>
</template>`,
};

const DropdownWithoutArrowIconCode = {
  "DropdownComponent.vue": `<script setup>
import {
  Button,
  Divider,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
} from "keep-vue";
</script>

<template>
  <div class="flex items-center justify-center px-5 py-3">
    <Dropdown>
      <DropdownAction as-child>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  </div>
</template>`,
};

export {
  CustomDropdownCode,
  DefaultDropdownCode,
  DropdownWithIconCode,
  DropdownWithoutArrowIconCode,
};
