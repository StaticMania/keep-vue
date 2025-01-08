---
title: "Breadcrumb"
description: "The Breadcrumb component in Keep Vue offers a navigation aid that allows users to easily understand their current location within a website or application. With customizable options for type, icon, divider, and style, the component can be tailored to fit your design while enhancing the user experience."
---

## Default Breadcrumb

The default Breadcrumb component provides a straightforward way for users to identify their location within your application. In this example, we use icons from Phosphor Icons to demonstrate how to include icons in the breadcrumb trail.

::DefaultBreadcrumb
::

## Breadcrumb Active bar

By default, the active breadcrumb item does not have an outline style. You can customize the appearance of the active item by setting the outline property in the <BreadcrumbPage/> component.

::BreadcrumbActiveOutline
::

## Border Types

The Breadcrumb component includes a `borderType` prop with two options:

- `"border-xy"`: Displays borders on all sides.
- `"border-y"`: Displays borders only on the top and bottom sides.

::BreadcrumbWithBorder
::

## Divider Icon Type

You can customize the breadcrumb divider by using any icon that fits your application's design.

::BreadcrumbDividerIcon
::

## Breadcrumb Ellipsis

For long breadcrumb trails, you can use the <BreadcrumbEllipsis /> component to wrap items into an ellipsis, improving readability and saving space.

::BreadcrumbWitEllipsis
::

## Breadcrumb List API Reference

Explore the available props for the `<BreadcrumbList>` component.

::BreadcrumbListApi
::

## Breadcrumb Item API Reference

Explore the available props for the `<BreadcrumbItem>` component.

::BreadcrumbItemApi
::

## Breadcrumb Link API Reference

Explore the available props for the `<BreadcrumbLink>` component.

::BreadcrumbLinkApi
::

## Breadcrumb Page API Reference

Explore the available props for the `<BreadcrumbPage>` component.

::BreadcrumbPageApi
::

## Reference

To explore the achild porperty see [Redix vue asChild](https://www.radix-vue.com/guides/composition)
