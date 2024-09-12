<script lang="ts" setup>
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
</script>

<template>
  <div class="flex items-center justify-center gap-5 px-5 py-3">
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
    <Notification position="bottomRight">
      <NotificationAction as-child>
        <Button>Bottom Right</Button>
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
    <Notification position="topLeft">
      <NotificationAction as-child>
        <Button>Top Left</Button>
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
    <Notification position="topRight">
      <NotificationAction as-child>
        <Button>Top Right</Button>
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
    <Notification position="topCenter">
      <NotificationAction as-child>
        <Button>Top Center</Button>
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
  </div>
</template>
