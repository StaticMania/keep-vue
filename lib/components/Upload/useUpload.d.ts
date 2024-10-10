import type { UploadContextProps } from "./uploadInterface";
declare const useProvideUpload: (args_0: UploadContextProps) => {
    options: Partial<import("vue3-dropzone").FileUploadOptions> | undefined;
    horizontal: boolean | undefined;
};
declare function useUpload(): {
    options: Partial<import("vue3-dropzone").FileUploadOptions> | undefined;
    horizontal: boolean | undefined;
};
export { useProvideUpload, useUpload };
