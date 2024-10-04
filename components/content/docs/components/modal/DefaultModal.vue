<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "~/src";
import { DefaultModalCode } from "./modalCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultModalCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Modal>
        <ModalAction as-child>
          <Button>Open Modal</Button>
        </ModalAction>
        <ModalContent
          class="sm:max-w-[425px] dark:border-metal-900 dark:bg-metal-900">
          <ModalClose class="absolute right-4 top-4" />

          <ModalHeader>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white mb-4">
              <PhosphorIconCloudArrowUp :size="28" />
            </div>
            <ModalTitle>Update Modal Status</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new
              page to continue.
            </ModalDescription>
          </ModalHeader>

          <ModalFooter>
            <Button type="submit">Cancel</Button>
            <Button type="submit">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  </CodeHighlightWithPreview>
</template>
