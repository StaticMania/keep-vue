export interface ButtonColorVariant {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
}
export interface ButtonSizeVariant {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}
interface KeepButtonTheme {
    base: string;
    size: {
        base: ButtonSizeVariant;
        default: ButtonSizeVariant;
        radius: string;
    };
    iconBtn: ButtonSizeVariant;
    variant: {
        link: ButtonColorVariant;
        outline: ButtonColorVariant;
        softBg: ButtonColorVariant;
        default: ButtonColorVariant;
    };
    position: {
        start: string;
        end: string;
        center: string;
    };
}
export declare const buttonTheme: KeepButtonTheme;
type ButtonVariants = (options?: {
    color?: keyof ButtonColorVariant;
    size?: keyof ButtonSizeVariant;
    variant?: "link" | "outline" | "softBg" | "default" | "rounded";
    shape?: "circle" | "icon";
    position?: "start" | "end" | "center";
    radius?: "default" | "full";
}) => string;
declare const buttonVariants: ButtonVariants;
export { buttonVariants };
