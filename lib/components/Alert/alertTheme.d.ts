export interface ColorVariant {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
}
interface KeepAlertTheme {
    colorWithBg: ColorVariant;
    colorWithOutBg: ColorVariant;
    root: {
        base: string;
    };
    container: {
        base: string;
    };
    description: {
        base: string;
        color: ColorVariant;
    };
    link: {
        base: string;
        color: ColorVariant;
    };
    title: {
        base: string;
        color: ColorVariant;
    };
}
export declare const alertTheme: KeepAlertTheme;
export {};
