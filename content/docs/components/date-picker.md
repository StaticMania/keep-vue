---
title: "DatePicker"
description: "The Date Picker component offers an intuitive way for users to select dates from a calendar. With this component, users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of customization options, allowing developers to control date formats, highlight specific dates, set minimum and maximum selectable dates, and more."
---

## Default Date Picker

The Default Date Picker component provides a simple interface for selecting a single date. Users can choose a date, and the selected date is managed using a variable. For our example we have used value as a ref value.

::DefaultDatePicker
::

## Multiple Month Date Picker

The Multiple Month Date Picker allows users to view and select dates from multiple months. You can customize the number of months displayed using the `:number-of-months` prop.

::MultipleDatePicker
::

## Date Range Picker

The Date Range Picker enables users to select a range of dates. To use date range Picker Call the `RangeDatePicker` component instead of `DatePicker` component. You can customize the rand selection by updating the `start` and `end` value.

::DateRangePicker
::

## Multiple Range Date Picker

The Multiple Range Date Picker lets users select date ranges spanning across multiple months. Use `RangeDatePicker` component instead of `DatePicker` component. You can customize the number of months displayed using the `:number-of-months` prop.

::MultipleDateRangePicker
::

## Circle Date Picker

You can change the shape of the Date Picker component by using the `dayShape="circle"` or `day-shape="circle"` prop.

::CircleDatePicker
::

## Custom Date Picker

You can change the style of the date picker using the `classes` attribute. For more details see the api reference section.

::CustomDateTrigger
::

## Api Reference

Here is a list of the props that you can pass to the DatePicker and RangeDatePicker components. For better understanding when adding custom colors or styles to each section of the DatePicker component, inspect the elements in your browser dev tool first. All the separate component names are commented for better clarity.

::DatePickerAPi
::

## Reference

To learn more about the DatePicker, please see the documentation of [Radix Vue Calender](https://www.radix-vue.com/components/calendar) and [Radix Vue Range Calendar](https://www.radix-vue.com/components/range-calendar).
