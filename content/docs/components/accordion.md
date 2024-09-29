---
  title: 'Accordion'
  description: 'The Accordion Component in the Keep Vue allows you to create collapsible sections of content, commonly known as accordions. Users can toggle the visibility of the content by clicking on the disclosure button. With customizable options for the theme, open state, type, and state, you can create accordion components that fit seamlessly into your design and provide an intuitive user experience.'
---

## Default Accordion

The default Accordion component allows users to reveal and hide content by simply clicking on the disclosure button.

::DefaultAccordion

::

## Flush Accordion

Control the initial state of accordion panels with the `flush` property. As we use Redix vue for the accordion you have to give `type` prop value when using accordion.

::FlushAccordion

::

## Accordion First Open Panel

Use the `default-value` property to set the first accordion panel to be open by default.

::AccordionOpenFirstPanel

::

## Custom Accordion Icon

Use the `as-child="true"` or `as-child` property to set the custom accordion icon. You can add animation or other style by using `class` prop in the accordion icon.

::AccordionWithCustomIcon

::

## Accordion Without Icon

You can remove the icon of the accordion by simply remove the `accordionIcon` component

::AccordionWithoutIcon

::

## Disabled Accordion

Control user interactions by making specific AccordionPanel components non-interactive with the `disabled` or `disabled="true"` property.

::DisabledAccordion

::

## API Reference

Explore the available props for the Accordion component

::AccordionApi

::

## Reference

To learn more about the Accordion, please see the documentation of [Redix Vue Accordion](https://www.radix-vue.com/components/accordion)
