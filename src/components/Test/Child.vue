<script setup></script>

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
</template>
