<script lang="ts" setup>
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/src";
import { data1 } from "../TableApi";
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
</template>
