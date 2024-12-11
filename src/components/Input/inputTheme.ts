import { keepTw } from "~/src/utils/keepTw";

interface KeepInputTheme {
  input: string;
  icon: string;
}

export const inputTheme: KeepInputTheme = keepTw({
  input:
    "flex h-11 w-full rounded-lg border px-3 py-2 text-body-4 font-normal text-metal-900 placeholder:font-normal placeholder:text-metal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:border-metal-600  focus-visible:ring-metal-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white dark:bg-metal-900 dark:border-metal-500 dark:focus-visible:border-metal-100 dark:focus-visible:ring-metal-700 dark:focus-visible:ring-offset-metal-900 dark:text-white dark:placeholder:text-metal-300",
  icon: "pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50",
});
