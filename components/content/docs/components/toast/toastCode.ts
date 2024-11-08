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
import { Button, Toast } from 'keep-vue'
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
import { Button, Toast } from 'keep-vue';
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
import { Button, Toast } from 'keep-vue'

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: 'Keep Vue' }), 2000))
</script>

<template>
  <Button
    @click="
      () =>
        Toast.promise(promise, {
          loading: 'Loading...',
          success: (data) => {
            return data.name
          }
        })
    "
  >
    Show Toast
  </Button>
</template>`,
};

const ToastWrapperCode = {
  "App.vue(Vue)": ` <script setup>
//rest code...
import { useDark } from '@vueuse/core';
import { ToastWrapper } from 'keep-vue';
</script>

<template>
//placed at the top
<ToastWrapper
    :toast-options="{
      classes: {
        title: 'text-body-3 font-medium',
        toast: 'rounded-xl shadow-large',
        description: 'text-body-4 font-normal',
      },
    }" />

    //rest code...
</template>`,

  "App.vue(Nuxt)": `
<script setup>
//rest code...
import { ToastWrapper } from 'keep-vue'
const colorMode = useColorMode();
</script>
  
<template>
//placed at the top
<ToastWrapper
    :theme="colorMode.value === 'dark' ? 'dark' : 'light'"
    :toast-options="{
      classes: {
        title: 'text-body-3 font-medium',
        toast: 'rounded-xl shadow-large',
        description: 'text-body-4 font-normal',
      },
    }" />

    //rest code...
</template>
  `,
};

const ToastSetupCode = {
  Vue: `npm i @vueuse/core\nyarn add @vueuse/core `,
  Nuxt: "npx nuxi module add color-mode",
};

export {
  DefaultToastCode,
  ToastSetupCode,
  ToastVariantCode,
  ToastWithActionCode,
  ToastWithDescriptionCode,
  ToastWithPromiseCode,
  ToastWrapperCode,
};
