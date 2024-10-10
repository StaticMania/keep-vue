export interface KeepCarouselTheme {
    carouselContainer: string;
    viewport: string;
    controls: {
        wrapper: string;
        button: {
            container: string;
            wrapper: string;
            svg: string;
        };
        indicators: {
            container: string;
            dot: string;
        };
    };
    item: {
        container: string;
        slide: string;
    };
}
export declare const carouselTheme: KeepCarouselTheme;
