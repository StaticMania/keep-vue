<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Drawer,
  DrawerBar,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/src";
import { DefaultDrawerCode } from "./drawerCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultDrawerCode">
    <Drawer position="bottom">
      <DrawerTrigger as-child>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBar />
        <div class="mx-auto my-10 w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle
              class="text-heading-3 font-bold text-metal-900 lg:text-heading-2 dark:text-white">
              Keep Vue
            </DrawerTitle>
            <DrawerDescription
              class="text-body-3 font-normal text-metal-600 dark:text-metal-300">
              Elevate your web projects with Keep Vue&apos;s 40+ customizable
              components. Access open-source resources for efficient development
              and bring your ideas to life with ease.
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose as-child>
              <Button class="w-5/12">Explore now</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </CodeHighlightWithPreview>
</template>
