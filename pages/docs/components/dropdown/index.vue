<script setup lang="ts">
import CustomDropdown from "./variant/CustomDropdown.vue";
import DefaultDropdown from "./variant/DefaultDropdown.vue";
import DropdownWithIcon from "./variant/DropdownWithIcon.vue";
import DropdownWithoutArrowIcon from "./variant/DropdownWithoutArrowIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Dropdown - Keep Vue",
  description:
    "The Dropdown Component is a versatile user interface element that provides users with a menu of selectable options. With a wide range of customization options, including labels, icons, search bars, checkboxes, and more, the Dropdown Component enhances user interaction by offering intuitive and flexible selection functionalities.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 p-6">
        <h3>Default Dropdown</h3>
        <DefaultDropdown />
      </div>
      <div class="space-y-3 p-6">
        <h3>Dropdown With Icon</h3>
        <DropdownWithIcon />
      </div>
      <div class="space-y-3 p-6">
        <h3>Custom Dropdown</h3>
        <CustomDropdown />
      </div>
      <div class="space-y-3 p-6">
        <h3>Dropdown Without Arrow</h3>
        <p>
          If you want to remove the arrow just remove the DropdownArrow
          Component
        </p>
        <DropdownWithoutArrowIcon />
      </div>
    </div>
  </DocsContentLayout>
</template>
