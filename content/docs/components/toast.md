---
title: "Toast"
description: "Toasts typically appear as small, non-intrusive pop-up notifications that appear near the edge of the screen and disappear automatically after a short period of time or when dismissed by the user."
---

## Setup Toast

Setup the Toast component to display the toast message. First import the `ToastWrapper` component in our root directory and then use the `<ToastWrapper>` component. Now copy paste the default toast variant from the documentation. For handling dark mode we use `vueUse useDark` for vue file and for the nuxt we use `nuxt colorMode`.

::ToastSetupCode
::

## Default Toast

The default toast shows a short message to the user.
::DefaultToast
::

## Toast With Description

Toast with title and description for providing additional details to the user.
::ToastWithDescription
::

## Toast With Action

You can include an action button in the toast component, allowing users to dismiss the toast by clicking on it.
::ToastWithAction
::

## Toast With Color Variant

You can use different color variants such as `success`, `error`, or `info`.
::ToastVariant
::

## Toast With Promise

You can pass a promise to the toast component.
::ToastWithPromise
::

## Reference

To learn more about the Toast component, please see the documentation of [Vue Sonner](https://vue-sonner.vercel.app/)
