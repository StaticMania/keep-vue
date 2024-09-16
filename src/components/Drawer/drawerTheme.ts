interface KeepDrawerTheme {
  content: {
    base: string;
    position: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
  };
  bar: {
    base: string;
    position: {
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
  };
}

export const keepDrawerTheme: KeepDrawerTheme = {
  content: {
    base: "fixed z-50 flex h-auto rounded-t-[10px] border bg-white",
    position: {
      top: "inset-x-0 top-0 flex-col-reverse",
      bottom: "inset-x-0 bottom-0 mt-24 flex-col",
      left: "bottom-0 left-0 top-0 w-1/2 ml-3 flex-row-reverse lg:w-3/12 ",
      right: "bottom-0 right-0 top-0 w-1/2 mr-3 flex-row lg:w-3/12",
    },
  },
  bar: {
    base: "mx-auto h-2 w-[100px] rounded-full bg-metal-200",
    position: {
      top: "mb-4 mt-3",
      bottom: "mt-4",
      left: "relative bottom-1/2 left-6 top-1/2 rotate-90 cursor-grab ",
      right: "relative -left-6 bottom-1/2 top-1/2 rotate-90 cursor-grab",
    },
  },
};
