const DefaultEmptyCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>
<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 Not Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">Oops! You seem to be lost</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink
      href="/"
      :class="
        buttonVariants({
          color: 'primary',
        })
      ">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

const EmptyFolderCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>
<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 Empty Folder" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">This folder has gone missing</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

const NoDataFoundCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>
<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
        :height="234"
        width="350"
        alt="404 No Data Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">No Data Found</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

const NoResultPageCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>

<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 No Result Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">Sorry, no result found!</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

const NotFoundPageCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>

<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
        :height="234"
        :width="350"
        alt="404 Not Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">404 Not Found</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

const PageNotAvailableCode = {
  "EmptyComponent.vue": `<script setup>
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-vue";
</script>

<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 Page not available" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">
      Page is not available right now
    </EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>`,
};

export {
  DefaultEmptyCode,
  EmptyFolderCode,
  NoDataFoundCode,
  NoResultPageCode,
  NotFoundPageCode,
  PageNotAvailableCode,
};
