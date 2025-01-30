const defaultSelectCode = {
  "DefaultSelect.vue": `<script lang="ts" setup>
import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-vue";

const handleModelValue = (data: string) => {
  console.log(data);
};
</script>

<template>
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
</template>

`,
};

const selectActionWithIconCode = {
  "SelectActionWithIcon.vue": `<script lang="ts" setup>
import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-vue";
</script>

<template>
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
</template>
`,
};
const selectItemWithIconCode = {
  "SelectActionWithIcon.vue": `<script lang="ts" setup>
import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-vue";
</script>

<template>
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
</template>
`,
};

export { defaultSelectCode, selectActionWithIconCode, selectItemWithIconCode };
