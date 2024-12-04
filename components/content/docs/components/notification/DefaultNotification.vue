<script setup lang="ts">
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from "~/src";
import { DefaultNotificationCode } from "./notificationCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultNotificationCode">
    <div class="flex items-center justify-center">
      <Notification>
        <NotificationAction as-child>
          <Button>Open Notification</Button>
        </NotificationAction>
        <NotificationContent class="sm:max-w-[425px]">
          <NotificationTitle>Update Notification Status</NotificationTitle>
          <NotificationDescription>
            Your document has unsaved changes. Discard or save them as a new
            page to continue.
          </NotificationDescription>

          <NotificationFooter>
            <NotificationClose as-child>
              <Button>Accept</Button>
            </NotificationClose>
          </NotificationFooter>
        </NotificationContent>
      </Notification>
    </div>
  </CodeHighlightWithPreview>
</template>
