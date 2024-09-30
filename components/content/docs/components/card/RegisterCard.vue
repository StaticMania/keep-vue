<script lang="ts" setup>
import {
  PhEnvelope,
  PhFacebookLogo,
  PhGoogleLogo,
  PhLock,
} from "@phosphor-icons/vue";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
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
} from "~/src";
import { RegisterCardCode } from "./cardCode";
</script>

<template>
  <CodeHighlightWithPreview :code="RegisterCardCode">
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
            <Label html-for="email">Email*</Label>
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
            <Label html-for="password">Password*</Label>
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
          <Button type="submit" class="!mt-3 block w-full">
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
  </CodeHighlightWithPreview>
</template>
