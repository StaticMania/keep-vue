<script setup lang="ts">
import Command from "../Command/Command.vue";
import CommandEmpty from "../Command/CommandEmpty.vue";
import CommandGroup from "../Command/CommandGroup.vue";
import CommandInput from "../Command/CommandInput.vue";
import CommandItem from "../Command/CommandItem.vue";
import CommandShortcut from "../Command/CommandShortcut.vue";
</script>

<template>
  <Command class="max-w-[450px] rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Calendar">
          <PhosphorIconCalendar :size="22" class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="Profile">
          <PhosphorIconProfile :size="22" class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
