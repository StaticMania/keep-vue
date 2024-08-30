export type SpinnerColorVariant = {
  failure: string;
  gray: string;
  info: string;
  pink: string;
  purple: string;
  success: string;
  warning: string;
};
export type SpinnerSizeVariant = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

interface KeepSpinnerTheme {
  base: string;
  color: SpinnerColorVariant;
  size: SpinnerSizeVariant;
}

export const spinnerTheme: KeepSpinnerTheme = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-blue-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400",
  },

  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  },
};
