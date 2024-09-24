---
title: "Alert"
description: "The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements."
---

## Default Alert

The Default Alert is a clean and simple design, ideal for conveying straightforward notifications without any elaborate visuals.

::DefaultAlert
::

## Color Variants of Alerts

Colors can convey the nature of alerts. While the default color is `primary`, you can choose from `secondary`, `success`, `warning`, or `error`. Simply set the `color` prop accordingly.

::AlertColorVariant
::

## Alert With Background Color

Switch the background color of alerts using the `:with-bg="true"` or `withBg` prop. By default, `withBg` is set to `false`.

::AlertWithBgColor
::

## Dismissible Alerts

Dismiss alert messages by using the `dismiss` prop. The default behavior is server-side rendering. If you want to use a click event handler, set the alert as a client-side component. You have to pass dismiss function on the `@dismiss` prop in the `AlertDismiss` component

::AlertWithDismissIcon
::

## API Reference

Explore the available props for the Alert component.

::AlertApi
::
