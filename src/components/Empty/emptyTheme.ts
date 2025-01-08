export interface KeepEmptyTheme {
  root: RootTheme;
  title: KeepTitleTheme;
  description: KeepDescriptionTheme;
}

export interface KeepDescriptionTheme {
  base: string;
}

export interface KeepTitleTheme {
  base: string;
}

interface RootTheme {
  base: string;
}

export const emptyTheme: KeepEmptyTheme = {
  root: {
    base: "flex max-w-xl mx-auto flex-col items-center justify-center p-6",
  },
  title: {
    base: "mb-[14px] mt-5 text-heading-5 font-medium text-metal-700 dark:text-white",
  },
  description: {
    base: "mb-8 text-center text-body-3 font-normal text-metal-400 dark:text-metal-300",
  },
};
