import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, ref } from "vue";
import type {
  UnwrapRefCarouselApi as CarouselApi,
  CarouselEmits,
  CarouselProps,
} from "./interface";
// custom injectionKey
const CarouselStoreKey = "carousel-store";
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ options, orientation, plugins }: CarouselProps, emits: CarouselEmits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...options,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref<number[]>([]);

    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }

    function onDotButtonClick(index: number) {
      emblaApi.value?.scrollTo(index);
    }

    function onInit(api: CarouselApi) {
      if (api) scrollSnaps.value = api?.scrollSnapList();
    }

    function onSelect(api: CarouselApi) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
      selectedIndex.value = api?.selectedScrollSnap() ?? 0;
    }

    onMounted(() => {
      if (!emblaApi.value) return;
      emblaApi.value.on("init", onInit);
      emblaApi.value?.on("init", onSelect);
      emblaApi.value.on("reInit", onInit);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);

      emits("init-api", emblaApi.value);
    });

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      selectedIndex,
      scrollSnaps,
      onDotButtonClick,
      orientation,
    };
  },
  {
    injectionKey: CarouselStoreKey,
  },
);

function useCarousel() {
  const carouselState = useInjectCarousel();

  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel /> Component");

  return carouselState;
}

export { useCarousel, useProvideCarousel };
