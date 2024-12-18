const DefaultNotificationCode = {
  "NotificationComponent.vue": `<script setup>
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from "keep-vue";
</script>

<template>
  <Notification>
    <NotificationAction as-child>
      <Button>Open Notification</Button>
    </NotificationAction>
    <NotificationContent class="sm:max-w-[425px]">
      <NotificationTitle>Update Notification Status</NotificationTitle>
      <NotificationDescription>
        Your document has unsaved changes. Discard or save them as a new page to
        continue.
      </NotificationDescription>

      <NotificationFooter>
        <NotificationClose as-child>
          <Button>Accept</Button>
        </NotificationClose>
      </NotificationFooter>
    </NotificationContent>
  </Notification>
</template>`,
};

const NotificationPositionCode = {
  "NotificationComponent.vue": `<script setup>
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from "keep-vue";
</script>

<template>
    <Notification position="bottomLeft">
      <NotificationAction as-child>
        <Button>Bottom Left</Button>
      </NotificationAction>
      <NotificationContent>
        <NotificationTitle>Can we store cookies?</NotificationTitle>
        <NotificationDescription>
          Default message - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </NotificationDescription>
        <NotificationFooter>
          <NotificationClose as-child>
            <Button>Accept</Button>
          </NotificationClose>
          <NotificationClose as-child>
            <Button variant="outline">Review</Button>
          </NotificationClose>
        </NotificationFooter>
      </NotificationContent>
    </Notification>
</template>`,
};

const NotificationWithCardCode = {
  "NotificationComponent.vue": `<script setup>
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from "keep-vue";
</script>

<template>
    <Notification>
      <NotificationAction as-child>
        <Button>Open Notification</Button>
      </NotificationAction>
      <NotificationContent
        class="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
        <img
          src="https://via.placeholder.com/600x400"
          alt="image"
          class="rounded-lg w-[600px] h-[400px]"
         />
        <div>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </NotificationDescription>
        </div>
        <NotificationFooter>
          <NotificationClose as-child>
            <Button>Accept</Button>
          </NotificationClose>
          <NotificationClose as-child>
            <Button variant="outline">Review</Button>
          </NotificationClose>
        </NotificationFooter>
      </NotificationContent>
    </Notification>
</template>`,
};

export {
  DefaultNotificationCode,
  NotificationPositionCode,
  NotificationWithCardCode,
};
