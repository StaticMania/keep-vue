const CardWithAvatarCode = {
  "CardComponent.vue": `<script setup>
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "keep-vue";
</script>

<template>
  <Card class="max-w-md">
    <CardContent>
      <CardTitle>Our Contributors</CardTitle>
      <CardDescription>
        They help us to grow up the keep react component library
      </CardDescription>
      <AvatarGroup class="mt-3">
        <Avatar class="size-14">
          <AvatarImage src="/images/avatar/avatar-1.png" />
        </Avatar>
        <Avatar class="size-14">
          <AvatarImage src="/images/avatar/avatar-2.png" />
        </Avatar>
        <Avatar class="size-14">
          <AvatarImage src="/images/avatar/avatar-3.png" />
        </Avatar>
        <Avatar class="size-14">
          <AvatarImage src="/images/avatar/avatar-4.png" />
        </Avatar>
        <Avatar class="size-14">
          <AvatarImage src="/images/avatar/avatar-5.png" />
        </Avatar>
      </AvatarGroup>
    </CardContent>
  </Card>
</template>`,
};

const DefaultCardCode = {
  "CardComponent.vue": `<script setup>
import { Card, CardContent, CardDescription, CardTitle } from "keep-vue";
</script>
<template>
  <Card class="max-w-md">
    <CardContent>
      <CardTitle>Keep design system</CardTitle>
      <CardDescription>
        Component design systems can help developers to be more productive by
        providing them with a ready-made set of components to use.
      </CardDescription>
    </CardContent>
  </Card>
</template>`,
};

const ProductCardCode = {
  "CardComponent.vue": `<script setup>
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-vue";
</script>
<template>
  <Card>
    <CardHeader>
      <NuxtImg
        src="/images/keep-card.jpg"
        class="rounded-t-xl"
        alt="image"
        width="{600}"
        height="{300}" />
    </CardHeader>
    <CardContent class="space-y-3">
      <CardTitle>Lorem ipsum dolor sit</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
        animi voluptas perspiciatis quidem esse!
      </CardDescription>
      <Button>Buy Now</Button>
    </CardContent>
  </Card>
</template>`,
};

const RegisterCardCode = {
  "CardComponent.vue": `<script setup>
import {
  PhEnvelope,
  PhFacebookLogo,
  PhGoogleLogo,
  PhLock,
} from "@phosphor-icons/vue";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  InputIcon,
  Label,
} from "keep-vue";
</script>

<template>
  <Card class="max-w-sm">
    <CardContent class="space-y-3">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          If you don&apos;t have any account then just click here
        </CardDescription>
      </CardHeader>
      <div class="flex items-center justify-between gap-3">
        <Button variant="outline" color="secondary" class="w-full">
          <PhGoogleLogo :size="20" class="mr-1.5" />
          Google
        </Button>
        <Button variant="outline" color="secondary" class="w-full">
          <PhFacebookLogo :size="20" class="mr-1.5" />
          Facebook
        </Button>
      </div>
      <Divider>Or</Divider>
      <form class="space-y-2">
        <fieldset class="space-y-1">
          <Label for="email">Email*</Label>
          <div class="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              class="ps-11" />
            <InputIcon>
              <PhEnvelope :size="19" color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <fieldset class="space-y-1">
          <Label for="password">Password*</Label>
          <div class="relative">
            <Input
              id="password"
              placeholder="Enter password"
              type="password"
              class="ps-11" />
            <InputIcon>
              <PhLock :size="19" color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
        <Button type="submit" class="!mt-3 block w-full">Create Account</Button>
      </form>
    </CardContent>
  </Card>
</template>`,
};

export {
  CardWithAvatarCode,
  DefaultCardCode,
  ProductCardCode,
  RegisterCardCode,
};
