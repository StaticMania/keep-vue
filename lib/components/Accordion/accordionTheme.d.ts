export interface KeepAccordionContainerTheme {
    base: string;
    open: string;
}
export interface KeepAccordionContentTheme {
    base: string;
}
export interface KeepAccordionIconTheme {
    base: string;
    rotated: {
        full: string;
        half: string;
    };
}
export interface KeepAccordionPanelTheme {
    flush: {
        on: string;
        off: string;
    };
}
export interface KeepAccordionTitleTheme {
    base: string;
}
interface KeepAccordionTheme {
    container: KeepAccordionContainerTheme;
    content: KeepAccordionContentTheme;
    icon: KeepAccordionIconTheme;
    panel: KeepAccordionPanelTheme;
    title: KeepAccordionTitleTheme;
}
export declare const accordionTheme: KeepAccordionTheme;
export {};
