import type { Config } from "tailwindcss";
type ColorThemeType = {
    [key: string]: {
        [key: number]: string;
    };
};
declare const colors: ColorThemeType;
declare const keepTheme: (config: Config, color?: ColorThemeType) => Config;
export { colors, keepTheme };
