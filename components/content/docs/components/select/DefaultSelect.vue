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
import { defaultSelectCode } from "./selectCode";

const handleModelValue = (data: string) => {
  console.log(data);
};
</script>

<template>
  <CodeHighlightWithPreview :code="defaultSelectCode">
    <div class="flex items-center justify-center">
      <Select @update:model-value="handleModelValue">
        <SelectAction class="w-[20rem]">
          <SelectValue placeholder="Select team" />
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Team</SelectLabel>
            <SelectItem value="gd">Graphic Designer</SelectItem>
            <SelectItem value="ud">UX Designer</SelectItem>
            <SelectItem value="pm">Product Manager</SelectItem>
            <SelectItem value="wde">Web Designer</SelectItem>
            <SelectItem value="swe">Software Engineer</SelectItem>
            <SelectItem value="mm">Marketing Manager</SelectItem>
            <SelectItem value="wd">Web Developer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </CodeHighlightWithPreview>
</template>
