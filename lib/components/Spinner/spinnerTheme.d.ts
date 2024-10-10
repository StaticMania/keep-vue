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
export declare const spinnerTheme: KeepSpinnerTheme;
export {};
