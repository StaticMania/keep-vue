const DefaultModalCode = {
  "ModalComponent.vue": `<script setup>
import { PhCloudArrowUp } from "@phosphor-icons/vue";
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
} from "keep-vue";
</script>

<template>
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
</template>
`,
};

const CustomizeModalCode = {
  "ModalComponent.vue": `<script setup>
import { PhCheck } from "@phosphor-icons/vue";
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
} from "keep-vue";
</script>

<template>
     <Modal>
        <ModalAction as-child>
          <Button>Open Modal</Button>
        </ModalAction>
        <ModalContent
          class="w-[20rem] lg:w-[26rem] dark:border-metal-900 dark:bg-metal-900">
          <ModalClose class="absolute right-4 top-4" />
          <ModalHeader
            class="mb-6 flex flex-col items-center justify-center space-y-3">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-metal-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
              <PhosphorIconCheck :size="60" />
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
            <Button>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</template>`,
};

export { CustomizeModalCode, DefaultModalCode };
