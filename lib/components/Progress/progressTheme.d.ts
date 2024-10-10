export type ProgressSizeVariant = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
export interface ProgressThemeInterface {
    circle: {
        root: string;
        svg: {
            base: string;
            circle: string;
            g: string;
            gCircle: string;
        };
    };
    line: {
        root: string;
        progress: {
            base: string;
            bar: string;
        };
        text: {
            base: string;
        };
    };
}
export declare const progressTheme: ProgressThemeInterface;
