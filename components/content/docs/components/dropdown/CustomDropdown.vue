<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Avatar,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownList,
} from "~/src";
import { CustomDropdownCode } from "./dropdownCode";

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
  <CodeHighlightWithPreview
    class="bg-metal-50 dark:bg-[#0D1015]"
    :code="CustomDropdownCode">
    <div class="flex items-center justify-center px-5 py-3">
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
                </Avatar>
              </div>
              <div>
                <p
                  class="text-body-4 font-medium text-metal-900 dark:text-white">
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
    </div>
  </CodeHighlightWithPreview>
</template>
