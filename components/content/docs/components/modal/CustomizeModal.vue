<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "~/src";
import { CustomizeModalCode } from "./modalCode";
</script>

<template>
  <CodeHighlightWithPreview :code="CustomizeModalCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Modal>
        <ModalAction as-child>
          <Button>Open Modal</Button>
        </ModalAction>
        <ModalContent class="w-[20rem] lg:w-[26rem]">
          <ModalClose class="absolute right-4 top-4" />
          <ModalHeader
            class="mb-6 flex flex-col items-center justify-center space-y-3">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-success-50 text-success-500 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
              <PhosphorIconCheckCircle weight="fill" :size="60" />
            </div>
            <div class="space-y-1 text-center">
              <ModalTitle>Payment Successful</ModalTitle>
              <ModalDescription>
                Your document has unsaved changes. Discard or save them as a new
                page to continue.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalFooter class="justify-center">
            <ModalClose as-child>
              <Button>Confirm</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  </CodeHighlightWithPreview>
</template>
