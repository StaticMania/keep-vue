import { toast } from "vue-sonner";
import { ToastWrapper } from "~/src";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ToastWrapper", ToastWrapper);

  return {
    provide: {
      toast,
    },
  };
});
