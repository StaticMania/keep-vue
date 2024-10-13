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

  "TableData.ts": `[
  {
    id: 1,
    fileName: "Landscape-Beach.png",
    fileFormat: "Png",
    ratio: "16:9",
    resolution: "1920x1080",
    fileSize: "43 KB",
    status: "In Progress",
  },
  {
    id: 2,
    fileName: "Portrait-Sunset.jpg",
    fileFormat: "Jpg",
    ratio: "4:3",
    resolution: "1024x768",
    fileSize: "128 KB",
    status: "Complete",
  },
  {
    id: 3,
    fileName: "Cityscape-Night.png",
    fileFormat: "Png",
    ratio: "16:9",
    resolution: "3840x2160",
    fileSize: "210 KB",
    status: "Pending",
  },
  {
    id: 4,
    fileName: "Animation-Loading.gif",
    fileFormat: "Gif",
    ratio: "1:1",
    resolution: "800x800",
    fileSize: "76 KB",
    status: "In Progress",
  },
  {
    id: 5,
    fileName: "Mountain-Peak.jpg",
    fileFormat: "Jpg",
    ratio: "16:9",
    resolution: "2560x1440",
    fileSize: "312 KB",
    status: "Complete",
  },
]`,
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
              <DropdownContent align="end"
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

  "TableData.ts": `[
  {
    id: 1,
    type: "DL-19266755",
    date: {
      day: "Feb 28, 2024",
      time: "10:00 am",
    },
    country: "/images/icon/country-0.svg",
    status: "Delivered",
    quant: 100,
    price: 21000,
    location: "New York, USA",
  },
  {
    id: 2,
    type: "DL-19266756",
    date: {
      day: "Mar 1, 2024",
      time: "11:00 am",
    },
    country: "/images/icon/country-1.svg",
    status: "In Transit",
    quant: 200,
    price: 42000,
    location: "Los Angeles, USA",
  },
  {
    id: 3,
    type: "DL-19266757",
    date: {
      day: "Mar 2, 2024",
      time: "12:00 pm",
    },
    country: "/images/icon/country-2.svg",
    status: "Pending",
    quant: 150,
    price: 31500,
    location: "Chicago, USA",
  },
  {
    id: 4,
    type: "DL-19266758",
    date: {
      day: "Mar 3, 2024",
      time: "1:00 pm",
    },
    country: "/images/icon/country-4.svg",
    status: "Delivered",
    quant: 300,
    price: 63000,
    location: "Houston, USA",
  },
  {
    id: 5,
    type: "DL-19266759",
    date: {
      day: "Mar 4, 2024",
      time: "2:00 pm",
    },
    country: "/images/icon/country-5.svg",
    status: "In Transit",
    quant: 250,
    price: 52500,
    location: "Phoenix, USA",
  },
]`,
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
            <h3
              class="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Total Product
            </h3>
            <Badge>500 Product</Badge>
          </div>
          <div class="flex items-center gap-5">
            <Button variant="outline" class="flex gap-1.5">
              <PhosphorIconPlus class="size-4 fill-primary-400" />
              Add Product
            </Button>
            <Button variant="outline" class="flex gap-1.5">
              <PhosphorIconFunnel class="size-4 fill-primary-400" />
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
              <DropdownContent align="end"
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

  "TableData.ts": `[
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];`,
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
            <h3
              class="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Team Members
            </h3>
            <Badge color="secondary">200 Member</Badge>
          </div>
          <div class="flex items-center gap-5">
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconPlus class="size-4 fill-primary-400" />
              New Member
            </Button>
            <Button variant="outline" class="gap-1.5">
              <PhosphorIconMagnifyingGlass class="size-4 fill-primary-400" />
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
              <DropdownContent align="end"
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
  "TableData.ts": `[
  {
    id: 1,
    user: {
      img: "/images/avatar/avatar-1.png",
      name: "Robert Fox",
      position: "Software Engineer",
    },
    status: "Active",
    role: "Manager",
    email: "robert@staticmania.com",
    team: ["Product", "Marketing", "+3"],
    performance: "/images/series/series-1.svg",
  },
  {
    id: 2,
    user: {
      img: "/images/avatar/avatar-2.png",
      name: "Jane Doe",
      position: "UI/UX Designer",
    },
    status: "Inactive",
    role: "Designer",
    email: "jane@staticmania.com",
    team: ["Design", "Development", "+2"],
    performance: "/images/series/series-2.svg",
  },
  {
    id: 3,
    user: {
      img: "/images/avatar/avatar-3.png",
      name: "John Smith",
      position: "Backend Developer",
    },
    status: "Active",
    role: "CTO",
    email: "john@staticmania.com",
    team: ["Development", "Operations", "+4"],
    performance: "/images/series/series-3.svg",
  },
  {
    id: 4,
    user: {
      img: "/images/avatar/avatar-4.png",
      name: "Alice Johnson",
      position: "Project Manager",
    },
    status: "Inactive",
    role: "Manager",
    email: "alice@staticmania.com",
    team: ["Project Management", "HR", "+1"],
    performance: "/images/series/series-4.svg",
  },
  {
    id: 5,
    user: {
      img: "/images/avatar/avatar-5.png",
      name: "Michael Brown",
      position: "Data Scientist",
    },
    status: "Active",
    role: "Data Analyst",
    email: "michael@staticmania.com",
    team: ["Data Science", "Marketing", "+2"],
    performance: "/images/series/series-5.svg",
  },
]`,
};

export { DefaultTableCode, OrdersTableCode, ProductTableCode, TeamTableCode };
