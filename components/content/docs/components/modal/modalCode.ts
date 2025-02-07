const DefaultModalCode = {
  "ModalComponent.vue": `<script setup>
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
          class="sm:max-w-[425px]">
          <ModalClose class="absolute right-4 top-4" />

           <ModalHeader>
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none">
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM15.5 9C15.7967 9 16.0867 9.08797 16.3334 9.2528C16.58 9.41762 16.7723 9.65189 16.8858 9.92597C16.9994 10.2001 17.0291 10.5017 16.9712 10.7926C16.9133 11.0836 16.7704 11.3509 16.5607 11.5607C16.3509 11.7704 16.0836 11.9133 15.7926 11.9712C15.5017 12.0291 15.2001 11.9994 14.926 11.8858C14.6519 11.7723 14.4176 11.58 14.2528 11.3334C14.088 11.0867 14 10.7967 14 10.5C14 10.1022 14.158 9.72064 14.4393 9.43934C14.7206 9.15804 15.1022 9 15.5 9ZM17 23C16.4696 23 15.9609 22.7893 15.5858 22.4142C15.2107 22.0391 15 21.5304 15 21V16C14.7348 16 14.4804 15.8946 14.2929 15.7071C14.1054 15.5196 14 15.2652 14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14C15.5304 14 16.0391 14.2107 16.4142 14.5858C16.7893 14.9609 17 15.4696 17 16V21C17.2652 21 17.5196 21.1054 17.7071 21.2929C17.8946 21.4804 18 21.7348 18 22C18 22.2652 17.8946 22.5196 17.7071 22.7071C17.5196 22.8946 17.2652 23 17 23Z"
                  fill="#1B4DFF" />
              </svg>
            </div>
            <ModalTitle>Update Modal Status</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new
              page to continue.
            </ModalDescription>
          </ModalHeader>

          <ModalFooter>
            <ModalClose as-child>
              <Button type="submit" variant="outline" color="secondary">
                Cancel
              </Button>
            </ModalClose>
            <ModalClose as-child>
              <Button type="submit">Confirm</Button>
            </ModalClose>
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
          class="w-[20rem] lg:w-[26rem]">
          <ModalClose class="absolute right-4 top-4" />
          <ModalHeader
            class="mb-6 flex flex-col items-center justify-center space-y-3">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-success-50 text-success-500 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
              <PhCheckCircle weight="fill" :size="60" />
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
</template>`,
};

export { CustomizeModalCode, DefaultModalCode };
