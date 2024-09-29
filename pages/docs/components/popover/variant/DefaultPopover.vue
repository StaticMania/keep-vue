<script lang="ts" setup>
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from "~/src";
</script>

<template>
  <div class="flex h-52 items-center justify-center gap-5">
    <Popover>
      <PopoverAction as-child>
        <Button>Left</Button>
      </PopoverAction>
      <PopoverContent side="left">
        <div class="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
        <PopoverArrow :width="10" :height="10" />
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverAction as-child>
        <Button>Right</Button>
      </PopoverAction>
      <PopoverContent side="right">
        <div class="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
        <PopoverArrow :width="10" :height="10" />
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverAction as-child>
        <Button>Top</Button>
      </PopoverAction>
      <PopoverContent side="top">
        <div class="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
        <PopoverArrow :width="10" :height="10" />
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverAction as-child>
        <Button>Bottom</Button>
      </PopoverAction>
      <PopoverContent>
        <div class="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </div>
        <PopoverArrow :width="10" :height="10" />
      </PopoverContent>
    </Popover>
  </div>
</template>
