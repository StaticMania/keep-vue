import { ref } from "vue";

export function useCopy() {
  const copy = ref<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator?.clipboard
      ?.writeText(text)
      .then(() => {
        copy.value = true;
        setTimeout(() => {
          copy.value = false;
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        copy.value = false;
      });
  };

  return {
    copy,
    copyToClipboard,
  };
}
