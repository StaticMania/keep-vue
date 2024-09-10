<script setup lang="ts">
import { PhCloudArrowUp } from "@phosphor-icons/vue";
import { Button } from "~/src";
import ModalAction from "../Modal/ModalAction.vue";
import ModalClose from "../Modal/ModalClose.vue";
</script>

<template>
  <Modal>
    <ModalAction as-child>
      <Button>Edit Profile</Button>
    </ModalAction>
    <ModalContent class="sm:max-w-[425px]">
      <ModalClose />

      <ModalHeader>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white mb-4">
          <PhCloudArrowUp :size="28" />
        </div>
        <ModalTitle>Update Modal Status</ModalTitle>
        <ModalDescription>
          Your document has unsaved changes. Discard or save them as a new page
          to continue.
        </ModalDescription>
      </ModalHeader>

      <ModalFooter>
        <Button type="submit">Cancel</Button>
        <Button type="submit">Confirm</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</template>
