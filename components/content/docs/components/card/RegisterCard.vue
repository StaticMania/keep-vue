<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  InputIcon,
  Label,
} from "~/src";
import { RegisterCardCode } from "./cardCode";
</script>

<template>
  <CodeHighlightWithPreview :code="RegisterCardCode">
    <div class="flex items-center justify-center">
      <Card class="w-full max-w-[340px]">
        <CardContent class="space-y-3">
          <CardHeader class="flex flex-col items-center justify-center gap-y-2">
            <div
              class="flex size-8 items-center justify-center rounded-full bg-primary-50">
              <NuxtImg src="/images/icon/figma.svg" class="" />
            </div>

            <div class="text-center">
              <CardTitle
                class="text-body-1 font-medium text-metal-900 dark:text-metal-200">
                Log in your account
              </CardTitle>
              <CardDescription
                class="text-body-4 font-normal text-metal-600 dark:text-metal-300">
                Welcome back! Please enter your details.
              </CardDescription>
            </div>
          </CardHeader>
          <form class="space-y-2">
            <fieldset class="space-y-1">
              <Label for="email">
                Email
                <span class="text-error-500">*</span>
              </Label>
              <div class="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  class="ps-11" />
                <InputIcon>
                  <PhosphorIconEnvelope :size="19" color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset class="space-y-1">
              <Label for="password">
                Password
                <span class="text-error-500">*</span>
              </Label>
              <div class="relative">
                <Input
                  id="password"
                  placeholder="Enter password"
                  type="password"
                  class="ps-11" />
                <InputIcon>
                  <PhosphorIconLock :size="19" color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>

            <div class="flex items-center justify-between">
              <fieldset class="flex items-center space-x-1">
                <Checkbox id="rememberMe" default-checked />
                <Label for="rememberMe" class="text-body-4">Remember Me</Label>
              </fieldset>

              <NuxtLink
                href="/"
                class="text-body-4 font-medium text-primary-500 dark:text-primary-300">
                Forget Password
              </NuxtLink>
            </div>
          </form>
          <div class="!mt-6">
            <Button class="flex w-full items-center gap-x-3 text-body-3">
              Continue
              <PhosphorIconCaretRight weight="bold" class="size-4" />
            </Button>
          </div>
          <Divider variant="center" class="text-body-5">Or</Divider>

          <div class="space-y-2">
            <Button
              class="flex w-full items-center justify-center gap-x-3 border-metal-300 py-6 text-body-3 text-metal-600 dark:text-metal-300"
              variant="outline">
              <div class="">
                <NuxtImg
                  src="/images/icon/google.svg"
                  alt="googleImg"
                  class="size-7" />
              </div>
              Login with Google
            </Button>
            <Button
              class="flex w-full items-center justify-center gap-x-3 border-metal-300 py-6 text-body-3 text-metal-600 dark:text-metal-300"
              variant="outline">
              <PhosphorIconXLogo
                class="text-heading-6 text-black dark:text-white" />
              Login with X
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </CodeHighlightWithPreview>
</template>
