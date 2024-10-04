export interface KeepAccordionContainerTheme {
  base: string;
  open: string;
}

export interface KeepAccordionContentTheme {
  base: string;
}

export interface KeepAccordionIconTheme {
  base: string;
  rotated: {
    full: string;
    half: string;
  };
}

export interface KeepAccordionPanelTheme {
  flush: {
    on: string;
    off: string;
  };
}

export interface KeepAccordionTitleTheme {
  base: string;
}

interface KeepAccordionTheme {
  container: KeepAccordionContainerTheme;
  content: KeepAccordionContentTheme;
  icon: KeepAccordionIconTheme;
  panel: KeepAccordionPanelTheme;
  title: KeepAccordionTitleTheme;
}

export const accordionTheme: KeepAccordionTheme = {
  container: {
    base: "flex cursor-pointer items-center w-full justify-between px-6 py-5 data-[disabled]:cursor-not-allowed ",
    open: "",
  },
  content: {
    base: "select-none text-body-3 font-normal text-metal-600 dark:text-metal-300 pb-5 px-6",
  },
  panel: {
    flush: {
      on: "rounded-none border-b border-metal-100 dark:border-metal-900",
      off: "rounded-xl border border-metal-100 dark:border-metal-800 bg-transparent dark:bg-transparent data-[state=open]:bg-metal-25 dark:data-[state=open]:bg-metal-900 data-[state=open]:shadow-large hover:bg-metal-25 dark:hover:bg-metal-900 transition-colors duration-300",
    },
  },
  icon: {
    base: "transition-transform duration-300",
    rotated: {
      full: "rotate-180",
      half: "rotate-0",
    },
  },
  title: {
    base: "select-none text-left text-body-1 font-medium text-metal-900 dark:text-white",
  },
};
