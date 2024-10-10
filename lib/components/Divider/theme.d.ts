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
export declare const dividerTheme: DividerThemeInterface;
export {};
