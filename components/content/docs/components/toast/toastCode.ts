const DefaultToastCode = {
  "ToastComponent.vue": `<script setup>
import { Button, Toast } from "keep-vue";
</script>

<template>
  <Button @click="() => Toast.info('Keep Vue is Awesome')">
    Default Toast
  </Button>
</template>`,
};

const ToastVariantCode = {
  "ToastComponent.vue": `<script setup>
import { Button, Toast } from "keep-vue";
</script>

<template>
    <Button @click="() => Toast.info('Keep Vue is Awesome')">Info Toast</Button>

    <Button color="success" @click="() => Toast.success('Keep Vue is Awesome')">
      Success Toast
    </Button>

    <Button color="warning" @click="() => Toast.warning('Keep Vue is Awesome')">
      Warning Toast
    </Button>

    <Button color="error" @click="() => Toast.error('Keep Vue is Awesome')">
      Error Toast
    </Button>
</template>`,
};

const ToastWithActionCode = {
  "ToastComponent.vue": `<script setup>
import { Toast } from "keep-vue";
</script>

<template>
  <Button
    color="secondary"
    @click="
      () =>
        Toast('Keep Vue is Awesome', {
          action: {
            label: 'Action',
            onClick: () => console.log('Action is pressed'),
          },
        })
    ">
    Show Toast
  </Button>
</template>`,
};

const ToastWithDescriptionCode = {
  "ToastComponent.vue": `<script setup>
import { Toast } from "keep-vue";
</script>

<template>
  <Button
    @click="
      () =>
        Toast('Keep Vue is Awesome', {
          description:
            'Elevate your web projects with Keep Vue 40+ customizable components.',
        })
    ">
    Show Toast
  </Button>
</template>`,
};

const ToastWithPromiseCode = {
  "ToastComponent.vue": `<script setup>
import { Button, Toast } from "keep-vue";

const promise = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Keep Vue" }), 2000),
  );
</script>

<template>
    <Button
      @click="
        () =>
          Toast.promise(promise, {
          loading: 'Loading...',
          success: (data: any) => {
            return {data.name} toast has been added
          }
          })
      ">
      Toast
    </Button>
</template>
`,
};

const ToastWrapperCode = {
  "App.vue": `
  <script setup>
  //rest code...
  const colorMode = useColorMode();
</script>

  <ToastWrapper
    :theme="colorMode.value === 'dark' ? 'dark' : 'light'"
    :toast-options="{
      classes: {
        title: 'text-body-3 font-medium',
        toast: 'rounded-xl shadow-large',
        description: 'text-body-4 font-normal',
      },
    }" />`,
};

export {
  DefaultToastCode,
  ToastVariantCode,
  ToastWithActionCode,
  ToastWithDescriptionCode,
  ToastWithPromiseCode,
  ToastWrapperCode,
};
