const CardPopoverCode = {
  "PopoverComponent.vue": `<script setup>
import {
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle
} from 'keep-vue'
</script>

<template>
  <Popover>
    <PopoverAction as-child>
      <Button>Left</Button>
    </PopoverAction>
    <PopoverContent
      side="left"
      class="z-20 max-w-[300px] rounded-xl bg-white p-0 dark:bg-metal-900"
    >
      <div>
        <img
          src="/images/keep-card.jpg"
          class="rounded-t-xl w-[600px] h-[400px]"
          alt="image"/>
        <div class="space-y-2 p-6">
          <PopoverTitle>Keep Design System</PopoverTitle>
          <PopoverDescription>
            You can customize the styles and behavior of this component according to your
            requirements.
          </PopoverDescription>
          <Button>Learn More</Button>
        </div>
      </div>
      <PopoverArrow :width="10" :height="10" />
    </PopoverContent>
  </Popover>
</template>`,
};

const IconPopoverCode = {
  "PopoverComponent.vue": `<script setup>
import { PhConfetti } from "@phosphor-icons/vue";
import {
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from "keep-vue";
</script>

<template>
     <Popover>
        <PopoverAction as-child>
          <Button>Left</Button>
        </PopoverAction>
        <PopoverContent
          side="left"
          class="z-20 max-w-xs rounded-xl bg-white p-6 shadow-sm dark:border-metal-800 dark:bg-metal-900">
          <div>
            <div
              class="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
              <PhConfetti :size="24" weight="fill" />
            </div>
            <div class="space-y-2 pt-4">
              <PopoverTitle class="text-body-2 font-semibold">
                Keep Design System
              </PopoverTitle>
              <PopoverDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since
              </PopoverDescription>
            </div>
            <p
              class="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">
              Step - 1 / 5
            </p>
            <div class="flex items-center justify-between gap-5 pt-6">
              <Button variant="outline" class="w-full">Skip</Button>
              <Button class="w-full">Next</Button>
            </div>
          </div>

          <PopoverArrow :width="10" :height="10" />
        </PopoverContent>
      </Popover>
</template>`,
};

const DefaultPopoverCode = {
  "PopoverComponent.vue": `<script setup>
import {
  Avatar,
  AvatarFallback
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from "keep-vue";
</script>

<template>
    <Popover>
      <PopoverAction as-child>
        <Button>Left</Button>
      </PopoverAction>
      <PopoverContent side="left">
        <div class="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
              <AvatarFallback>KV</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
        <PopoverArrow :width="10" :height="10" />
      </PopoverContent>
    </Popover>
</template>`,
};

export { CardPopoverCode, DefaultPopoverCode, IconPopoverCode };
