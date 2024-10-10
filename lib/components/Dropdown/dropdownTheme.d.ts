interface DropdownInterface {
    content: string;
    item: string;
}
export declare const dropdownTheme: DropdownInterface;
export declare const dropdownVariant: (property: keyof DropdownInterface) => string;
export {};
