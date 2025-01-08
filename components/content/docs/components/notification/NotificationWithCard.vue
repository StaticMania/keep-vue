<script lang="ts" setup>
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
import { NotificationWithCardCode } from "./notificationCode";
</script>

<template>
  <CodeHighlightWithPreview :code="NotificationWithCardCode">
    <div class="flex items-center justify-center px-5 py-3">
      <Notification>
        <NotificationAction as-child>
          <Button>Open Notification</Button>
        </NotificationAction>
        <NotificationContent
          class="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
          <NuxtImg
            src="https://via.placeholder.com/600x400"
            alt="image"
            class="rounded-lg"
            :width="600"
            :height="400" />
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
    </div>
  </CodeHighlightWithPreview>
</template>
