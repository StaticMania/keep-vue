export interface KeepCarouselTheme {
  carouselContainer: string;
  viewport: string;
  controls: {
    wrapper: string;
    button: {
      container: string;
      wrapper: string;
      svg: string;
    };
    indicators: {
      container: string;
      dot: string;
    };
  };
  item: {
    container: string;
    slide: string;
  };
}

export const carouselTheme: KeepCarouselTheme = {
  carouselContainer: "w-full",
  viewport: "overflow-hidden",
  controls: {
    wrapper: "flex items-center justify-between mt-[1.8rem]",
    button: {
      container: "flex items-center gap-2",
      wrapper:
        "inline-flex items-center justify-center border border-metal-600 dark:border-metal-300 rounded-full size-[2rem] text-metal-600 hover:text-metal-800 hover:bg-metal-50 disabled:bg-metal-50 disabled:opacity-50 dark:disabled:bg-metal-800 dark:hover:bg-metal-900",
      svg: "size-3 dark:text-white text-metal-600",
    },
    indicators: {
      container: "flex flex-wrap items-center gap-2",
      dot: "inline-flex size-3 rounded-full border-2 border-metal-300 dark:border-metal-800",
    },
  },
  item: {
    container: "flex -ml-4",
    slide: "flex-[0_0_100%] h-auto min-w-0 overflow-hidden pl-4",
  },
};
