---
title: "Upload"
description: "Upload Component is a user interface element that enables users to upload files or media from their local device to a web application or platform. It provides a means to select files, preview them if applicable, and initiate the upload process. The component is essential for allowing users to share content, images, documents, and other files with the application or website."
---

## Default Upload

The Default Upload component allows users to select and upload a file. When a file is selected, the `onDrop` callback is triggered to handle the file selection and update the name of the selected file.
::DefaultUpload
::

## Horizontal Upload

To display the upload component in a `horizontal` layout, set the `horizontal` or `horizontal="true"` in the upload prop.
::HorizontalUpload
::

## Single Upload

By default, the upload component allows users to select multiple files. To restrict users to uploading a single file, set the `multiple` prop to `false` within the `options` object.
::SingleUpload
::

## Upload Disabled

To prevent users from uploading files, use the `disabled` prop set to `true` within the `options` props.
::UploadDisabled
::

## API Reference

Explore the available props for the upload component.
::UploadApi
::

## Reference

Our Upload component is built using the `vue3-dropzone` package. For more information , follow the documentation [vue3-dropzone](https://github.com/Yaxian/vue3-dropzone#readme).
