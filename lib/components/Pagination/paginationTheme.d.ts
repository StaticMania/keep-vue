interface KeepPaginationTheme {
    root: {
        base: string;
    };
    list: {
        base: string;
    };
    item: {
        base: string;
        shape: {
            rounded: string;
            circle: string;
        };
        active: {
            on: string;
            off: string;
        };
    };
    goto: {
        base: string;
    };
    navigator: {
        base: string;
        shape: {
            rounded: string;
            circle: string;
        };
    };
}
export declare const paginationTheme: KeepPaginationTheme;
export {};
