interface KeepRadioTheme {
  input: string;
  button: {
    base: string;
    variant: {
      square: string;
      circle: string;
      rounded: string;
    };
  };
}

export const radioTheme: KeepRadioTheme = {
  input:
    "peer absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5",
  button: {
    base: "pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 opacity-100 transition-all duration-300 peer-checked:border-primary-500 peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:animate-zoomIn peer-checked:before:bg-primary-500 peer-disabled:opacity-50 dark:border-metal-100 dark:peer-checked:border-primary-500 dark:peer-checked:before:bg-primary-500",
    variant: {
      square: "rounded-none before:rounded-none",
      circle: "before:rounded-full rounded-full",
      rounded: "before:rounded-sm rounded",
    },
  },
};
