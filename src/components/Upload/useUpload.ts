import { createInjectionState } from "@vueuse/core";
import type { UploadContextProps } from "./uploadInterface";

const uploadStoreKey = "upload-store";

const [useProvideUpload, useInjectUpload] = createInjectionState(
  ({ options, horizontal }: UploadContextProps) => {
    return { options, horizontal };
  },
  {
    injectionKey: uploadStoreKey,
  },
);

function useUpload() {
  const UploadState = useInjectUpload();

  if (!UploadState)
    throw new Error("useUpload must be used within a <Upload /> Component");

  return UploadState;
}

export { useProvideUpload, useUpload };
