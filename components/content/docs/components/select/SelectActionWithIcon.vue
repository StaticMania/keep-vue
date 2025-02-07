<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "~/src";
import { selectActionWithIconCode } from "./selectCode";
</script>

<template>
  <CodeHighlightWithPreview :code="selectActionWithIconCode">
    <div class="flex items-center justify-center">
      <Select>
        <SelectAction class="w-[20rem]">
          <div class="flex items-center gap-2.5">
            <span>
              <PhosphorIconUser class="h-4 w-4" />
            </span>
            <SelectValue placeholder="Select team member" />
          </div>
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Member</SelectLabel>
            <SelectItem value="jd">John Doe</SelectItem>
            <SelectItem value="am">Alex Mack</SelectItem>
            <SelectItem value="gb">Gordon Brown</SelectItem>
            <SelectItem value="jc">Jimmie Crawford</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </CodeHighlightWithPreview>
</template>
