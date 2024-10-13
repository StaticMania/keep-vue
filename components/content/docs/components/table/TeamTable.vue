<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
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
} from "~/src";
import { data4 } from "./TableData";
import { TeamTableCode } from "./tableCode";
</script>

<template>
  <CodeHighlightWithPreview :code="TeamTableCode">
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
              <DropdownContent
                align="end"
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
  </CodeHighlightWithPreview>
</template>
