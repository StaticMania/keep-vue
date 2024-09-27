export interface ToolTipTheme {
  base: string;
  color: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  };
  arrowColor: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  };
}

export const toolTipTheme: ToolTipTheme = {
  base: "text-grass11 z-50 max-w-[263px] select-none rounded-xl border  px-2.5 py-2 text-[15px] text-sm leading-none shadow-md will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade",
  color: {
    primary:
      "border-primary-500 bg-primary-500 ark:border-primary-500 dark:bg-primary-500",
    secondary:
      "border-metal-900 bg-metal-900 ark:border-metal-700 dark:bg-metal-700",
    success:
      "border-success-500 bg-success-500 ark:border-success-500 dark:bg-success-500",
    error:
      "border-error-500 bg-error-500 ark:border-error-500 dark:bg-error-500",
    warning:
      "border-warning-500 bg-warning-500 ark:border-warning-500 dark:bg-warning-500",
  },
  arrowColor: {
    primary: "fill-primary-500 dark:fill-primary-500",
    secondary: "fill-metal-900 dark:fill-metal-700",
    success: "fill-success-500 dark:fill-success-500",
    error: "fill-error-500 dark:fill-error-500",
    warning: "fill-warning-500 dark:fill-warning-500",
  },
};
