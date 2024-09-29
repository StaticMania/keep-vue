---
title: "Area Chart"
description: "An Area Chart is a visual way to show data as a line that turns into a colored shape below it. This shape helps you understand how the data changes over time or categories. It's like coloring under a line graph to see where the data is bigger or smaller. People use Area Charts to see trends, compare things, and notice patterns in data. The colored area makes it clear which parts are higher or lower in value."
---

## Default Area Chart

The Area Chart component is used to render an area chart based on the data.

::DefaultAreaChart
::

## Area Chart With Double Series

The AreaChart component now uses both `"price"` and `"amount"` data for the two series. This creates a chart that shows how both `"price"` and `"amount"` values change over the `"name"` categories, providing insights into both series simultaneously.

::DoubleSeriesAreaChart
::

## Reference

To learn more about the area chart, please see the documentation of [vue-chartjs](https://vue-chartjs.org/) and [Chart.js](https://www.chartjs.org/)
