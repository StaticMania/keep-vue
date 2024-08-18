interface CheckboxTheme {
  base: string;
  defaultColor: string;
  notDefault: string;
  circle: string;
  notCircle: string;
}

export const checkboxTheme: CheckboxTheme = {
  base: "peer relative h-5 w-5 shrink-0 border border-metal-200 ring-offset-primary-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:text-primary-500 dark:border-metal-100dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500",
  defaultColor:
    "data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500",
  notDefault:
    'data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:bg-primary-500 data-[state=checked]:before:content-[""] dark:data-[state=checked]:before:bg-primary-500',
  circle: "rounded-full data-[state=checked]:before:rounded-full",
  notCircle: "rounded data-[state=checked]:before:rounded-sm",
};
