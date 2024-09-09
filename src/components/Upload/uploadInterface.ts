import type { HTMLAttributes } from "vue";
import type { FileUploadOptions } from "vue3-dropzone";

export interface CommonUploadProps extends /*@vue-ignore*/ HTMLAttributes {}

export interface UploadContextProps {
  options?: Partial<FileUploadOptions>;
  horizontal?: boolean;
}
