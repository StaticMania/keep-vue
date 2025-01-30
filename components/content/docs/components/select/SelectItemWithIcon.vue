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
import { selectItemWithIconCode } from "./selectCode";
</script>

<template>
  <CodeHighlightWithPreview :code="selectItemWithIconCode">
    <div class="flex items-center justify-center">
      <Select>
        <SelectAction class="w-[20rem]">
          <SelectValue placeholder="Select email" />
        </SelectAction>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Email Address</SelectLabel>
            <SelectItem value="email1">
              <div class="flex items-center gap-2.5">
                <span>
                  <PhosphorIconEnvelope class="h-4 w-4" />
                </span>
                <span>johnny.cooper@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email2">
              <div class="flex items-center gap-2.5">
                <span>
                  <PhosphorIconEnvelope class="h-4 w-4" />
                </span>
                <span>johnni.carlson@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email3">
              <div class="flex items-center gap-2.5">
                <span>
                  <PhosphorIconEnvelope class="h-4 w-4" />
                </span>
                <span>carolyn.ramos@example.com</span>
              </div>
            </SelectItem>
            <SelectItem value="email4">
              <div class="flex items-center gap-2.5">
                <span>
                  <PhosphorIconEnvelope class="h-4 w-4" />
                </span>
                <span>jack.morris@example.com</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </CodeHighlightWithPreview>
</template>
