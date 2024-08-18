export interface DividerColorVariant {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
}

export interface DividerSizeVariant {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

interface DividerThemeInterface {
  withOutChildren: {
    base: string;
    color: DividerColorVariant;
    size: DividerSizeVariant;
  };
  withChildren: {
    base: string;
    textColor: DividerColorVariant;
    size: {
      start: DividerSizeVariant;
      center: DividerSizeVariant;
      end: DividerSizeVariant;
    };
    color: {
      start: DividerColorVariant;
      center: DividerColorVariant;
      end: DividerColorVariant;
    };
    variant: {
      start: string;
      end: string;
      center: string;
    };
  };
}

export const dividerTheme: DividerThemeInterface = {
  withOutChildren: {
    base: "border-b-0 block",
    color: {
      primary: "border-t-primary-100",
      secondary: "border-t-metal-100 dark:border-t-metal-700",
      success: "border-t-success-100",
      warning: "border-t-warning-100",
      error: "border-t-error-100",
    },
    size: {
      sm: "border-t-[0.5px]",
      md: "border-t",
      lg: "border-t-2",
      xl: "border-t-4",
      "2xl": "border-t-8",
    },
  },
  withChildren: {
    base: "flex items-center text-body-4",
    textColor: {
      primary: "text-primary-500",
      secondary: "text-metal-500 dark:text-white",
      success: "text-success-500",
      warning: "text-warning-500",
      error: "text-error-500",
    },
    size: {
      start: {
        sm: "after:border-t-[0.5px]",
        md: "after:border-t",
        lg: "after:border-t-2",
        xl: "after:border-t-4",
        "2xl": "after:border-t-8",
      },
      center: {
        sm: "before:border-t-[0.5px] after:border-t-[0.5px]",
        md: "before:border-t after:border-t",
        lg: "before:border-t-2 after:border-t-2",
        xl: "before:border-t-4 after:border-t-4",
        "2xl": "before:border-t-8 after:border-t-8",
      },
      end: {
        sm: "before:border-t-[0.5px]",
        md: "before:border-t",
        lg: "before:border-t-2",
        xl: "before:border-t-4",
        "2xl": "before:border-t-8",
      },
    },
    color: {
      start: {
        primary: "after:border-primary-100",
        secondary: "after:border-metal-100 dark:after:border-metal-700",
        success: "after:border-success-100",
        warning: "after:border-warning-100",
        error: "after:border-error-100",
      },
      center: {
        primary: "before:border-primary-100 after:border-primary-100",
        secondary:
          "before:border-metal-100 after:border-metal-100 dark:after:border-metal-700 dark:before:border-metal-700",
        success: "before:border-success-100 after:border-success-100",
        warning: "before:border-warning-100 after:border-warning-100",
        error: "before:border-error-100 after:border-error-100",
      },
      end: {
        primary: "before:border-primary-100",
        secondary: "before:border-metal-100 dark:before:border-metal-700",
        success: "before:border-success-100",
        warning: "before:border-warning-100",
        error: "before:border-error-100",
      },
    },
    variant: {
      start: "after:ms-6 after:flex-[1_1_0%]",
      end: "before:me-6 before:flex-[1_1_0%]",
      center: "before:me-6 before:flex-[1_1_0%] after:ms-6 after:flex-[1_1_0%]",
    },
  },
};
