export declare const badgeTheme: {
    base: string;
    color: {
        base: {
            primary: string;
            secondary: string;
            success: string;
            warning: string;
            error: string;
        };
        border: {
            primary: string;
            secondary: string;
            success: string;
            warning: string;
            error: string;
        };
        background: {
            primary: string;
            secondary: string;
            success: string;
            warning: string;
            error: string;
        };
    };
};
type BadgeVariants = (options?: {
    color?: keyof typeof badgeTheme.color.base;
    variant?: keyof typeof badgeTheme.color;
}) => string;
declare const badgeVariants: BadgeVariants;
export { badgeVariants };
