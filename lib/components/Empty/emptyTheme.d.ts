export interface KeepEmptyTheme {
    root: RootTheme;
    title: KeepTitleTheme;
    description: KeepDescriptionTheme;
}
export interface KeepDescriptionTheme {
    base: string;
}
export interface KeepTitleTheme {
    base: string;
}
interface RootTheme {
    base: string;
}
export declare const emptyTheme: KeepEmptyTheme;
export {};
