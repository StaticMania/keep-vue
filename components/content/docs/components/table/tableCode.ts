const DefaultTableCode = {
  "TableComponent.vue": `<script setup>
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-vue";
import { data1 } from "./TableData";
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <div class="max-w-[250px]">File Name</div>
        </TableHead>
        <TableHead>
          <div class="w-[80px]">File Format</div>
        </TableHead>
        <TableHead>
          <div class="w-[85px]">Aspect Ratio</div>
        </TableHead>
        <TableHead>
          <div class="w-[90px]">Resolution</div>
        </TableHead>
        <TableHead>
          <div class="w-[90px]">File Size</div>
        </TableHead>
        <TableHead>
          <div class="w-[80px]">Status</div>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in data1" :key="item.id">
        <TableCell>
          <div class="max-w-[250px] truncate">{{ item.fileName }}</div>
        </TableCell>
        <TableCell>{{ item.fileFormat }}</TableCell>
        <TableCell>{{ item.ratio }}</TableCell>
        <TableCell>{{ item.resolution }}</TableCell>
        <TableCell>{{ item.fileSize }}</TableCell>
        <TableCell>{{ item.status }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`,
};

const OrdersTableCode = {
  "TableComponent.vue": `<script setup>
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-vue";
import { data2 } from "./TableData";
</script>

<template>
  <Table>
      <TableCaption>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <h3
              class="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Total Orders
            </h3>
            <Badge color="secondary">200 Orders</Badge>
          </div>
          <div class="flex items-center gap-5">
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconPlus class="size-4 fill-primary-400" />
              Add Order
            </Button>
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconFunnel class="size-4 fill-primary-400" />
              Filter Order
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconArrowsDownUp
                class="size-4 fill-metal-900 dark:fill-white" />
              Type
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconCalendar
                class="size-4 fill-metal-900 dark:fill-white" />
              Date
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconFlag class="size-4 fill-metal-900 dark:fill-white" />
              Country
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconSpinner
                class="size-4 fill-metal-900 dark:fill-white" />
              Status
            </p>
          </TableHead>
          <TableHead>
            <p class="flex items-center gap-1.5">
              <PhosphorIconDotsNine
                class="size-4 fill-metal-900 dark:fill-white" />
              Quant.
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[100px] items-center gap-1.5">
              <PhosphorIconCurrencyDollar
                class="size-4 fill-metal-900 dark:fill-white" />
              Total Price
            </p>
          </TableHead>
          <TableHead>
            <p class="flex w-[120px] items-center gap-1.5">
              <PhosphorIconNavigationArrow
                class="size-4 fill-metal-900 dark:fill-white" />
              Location
            </p>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in data2" :key="item.id">
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{{ item.type }}</TableCell>
          <TableCell>
            <div>
              <p>{{ item.date.day }}</p>
              <p
                class="text-body-5 font-normal text-metal-600 dark:text-metal-300">
                {{ item.date.time }}
              </p>
            </div>
          </TableCell>
          <TableCell class="flex items-center justify-center">
            <NuxtImg :src="item.country" alt="flag" />
          </TableCell>
          <TableCell>
            <Badge
              :color="
                item.status === 'Delivered'
                  ? 'success'
                  : item.status === 'In Transit'
                    ? 'error'
                    : 'warning'
              ">
              {{ item.status }}
            </Badge>
          </TableCell>
          <TableCell class="text-center">{{ item.quant }}</TableCell>
          <TableCell class="text-center">
            {{ item.price.toLocaleString() }}
          </TableCell>
          <TableCell>{{ item.location }}</TableCell>
          <TableCell>
            <Dropdown>
              <DropdownAction as-child>
                <button>
                  <PhosphorIconDotsThreeOutlineVertical
                    class="size-4 fill-metal-900 dark:fill-white" />
                </button>
              </DropdownAction>
              <DropdownContent
                class="max-w-[200px] border border-metal-100 p-3">
                <DropdownList>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
</template>`,
};

const ProductTableCode = {
  "TableComponent.vue": `<script setup>
import {
  Badge,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-vue";
import { data3 } from "./TableData";
</script>

<template>
  <Table>
    <TableCaption>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-5">
          <h2
            class="text-heading-6 font-semibold text-metal-900 dark:text-white">
            Total Product
          </h2>
          <Badge>500 Product</Badge>
        </div>
        <div class="flex items-center gap-5">
          <Button variant="outline" class="flex gap-1.5">
            <PhosphorIconPlus class="size-4 fill-metal-900 dark:fill-white" />
            Add Product
          </Button>
          <Button variant="outline" class="flex gap-1.5">
            <PhosphorIconFunnel class="size-4 fill-metal-900 dark:fill-white" />
            Filter Product
          </Button>
        </div>
      </div>
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          <div class="w-[320px]">Product Name</div>
        </TableHead>
        <TableHead>
          <div class="w-[65px]">Price</div>
        </TableHead>
        <TableHead>
          <div class="w-[100px]">Category</div>
        </TableHead>
        <TableHead>
          <div class="w-[60px]">Rating</div>
        </TableHead>
        <TableHead>
          <div class="w-[60px]">Stock</div>
        </TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in data3" :key="item.id">
        <TableCell>{{ item.title }}</TableCell>
        <TableCell>{{ item.price }}</TableCell>
        <TableCell>{{ item.category }}</TableCell>
        <TableCell>{{ item.rating.rate }}</TableCell>
        <TableCell>{{ item.rating.count }}</TableCell>
        <TableCell>
          <Dropdown>
            <DropdownAction as-child>
              <button>
                <PhosphorIconDotsThreeOutlineVertical
                  class="size-4 fill-metal-900 dark:fill-white" />
              </button>
            </DropdownAction>
            <DropdownContent class="max-w-[200px] border border-metal-100 p-3">
              <DropdownList>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Move</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`,
};

const TeamTableCode = {
  "TableComponent.vue": `<script setup>
import {
  Avatar,
  AvatarImage,
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-vue";
import { data4 } from "./TableData";
</script>

<template>
  <Table>
    <TableCaption>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-5">
          <h2
            class="text-heading-6 font-semibold text-metal-900 dark:text-white">
            Team Members
          </h2>
          <Badge color="secondary">200 Member</Badge>
        </div>
        <div class="flex items-center gap-5">
          <Button variant="outline" class="gap-1.5">
            <PhosphorIconPlus class="size-4 fill-metal-900 dark:fill-white" />
            New Member
          </Button>
          <Button variant="outline" class="gap-1.5">
            <PhosphorIconMagnifyingGlass
              class="size-4 fill-metal-900 dark:fill-white" />
            Search
          </Button>
        </div>
      </div>
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox />
        </TableHead>
        <TableHead>
          <div class="w-[200px]">Members</div>
        </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Team</TableHead>
        <TableHead>Performance</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in data4" :key="item.id">
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>
          <div class="flex items-center gap-2">
            <Avatar>
              <AvatarImage :src="item.user.img" />
            </Avatar>
            <div>
              <p class="text-body-4 font-medium">{{ item.user.name }}</p>
              <p class="text-body-5 font-normal">{{ item.user.position }}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <Badge :color="item.status === 'Active' ? 'success' : 'error'">
            {{ item.status }}
          </Badge>
        </TableCell>
        <TableCell>{{ item.role }}</TableCell>
        <TableCell>{{ item.email }}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1">
            <Badge
              v-for="(t, i) in item.team"
              :key="t"
              :color="i % 2 === 0 ? 'primary' : 'success'">
              {{ t }}
            </Badge>
          </div>
        </TableCell>
        <TableCell>
          <NuxtImg :src="item.performance" alt="performance" />
        </TableCell>

        <TableCell>
          <Dropdown>
            <DropdownAction as-child>
              <button>
                <PhosphorIconDotsThreeOutlineVertical
                  class="size-4 fill-metal-900 dark:fill-white" />
              </button>
            </DropdownAction>
            <DropdownContent class="max-w-[200px] border border-metal-100 p-3">
              <DropdownList>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Move</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`,
};

export { DefaultTableCode, OrdersTableCode, ProductTableCode, TeamTableCode };
