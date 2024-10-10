import type { CarouselEmits, CarouselProps } from "./interface";
declare const useProvideCarousel: (args_0: CarouselProps, emits: CarouselEmits) => {
    carouselRef: import("vue").Ref<HTMLElement | undefined>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined>;
    canScrollPrev: import("vue").Ref<boolean>;
    canScrollNext: import("vue").Ref<boolean>;
    scrollPrev: () => void;
    scrollNext: () => void;
    selectedIndex: import("vue").Ref<number>;
    scrollSnaps: import("vue").Ref<number[]>;
    onDotButtonClick: (index: number) => void;
    orientation: "vertical" | "horizontal" | undefined;
};
declare function useCarousel(): {
    carouselRef: import("vue").Ref<HTMLElement | undefined>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined>;
    canScrollPrev: import("vue").Ref<boolean>;
    canScrollNext: import("vue").Ref<boolean>;
    scrollPrev: () => void;
    scrollNext: () => void;
    selectedIndex: import("vue").Ref<number>;
    scrollSnaps: import("vue").Ref<number[]>;
    onDotButtonClick: (index: number) => void;
    orientation: "vertical" | "horizontal" | undefined;
};
export { useCarousel, useProvideCarousel };
