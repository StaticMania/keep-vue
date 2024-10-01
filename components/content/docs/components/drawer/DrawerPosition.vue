<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/src";
import { DrawerPositionCode } from "./drawerCode";

const positionValue = ["left", "right", "top", "bottom"];
</script>

<template>
  <CodeHighlightWithPreview :code="DrawerPositionCode">
    <div class="flex items-center justify-center gap-4 px-5 py-3">
      <Drawer
        v-for="position in positionValue"
        :key="position"
        :position="position as any">
        <DrawerTrigger as-child>
          <Button>{{ position }}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto my-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle
                class="text-heading-3 font-bold text-metal-900 lg:text-heading-2 dark:text-white">
                Keep Vue
              </DrawerTitle>
              <DrawerDescription
                class="text-body-3 font-normal text-metal-600 dark:text-metal-300">
                Elevate your web projects with Keep Vue&apos;s 40+ customizable
                components. Access open-source resources for efficient
                development and bring your ideas to life with ease.
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
              <DrawerClose as-child>
                <Button class="w-7/12 sm:w-9/12">Explore now</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  </CodeHighlightWithPreview>
</template>
