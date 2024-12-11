import { keepTw } from "~/src/utils/keepTw";
import { cn } from "../../utils/cn";

interface DropdownInterface {
  content: string;
  item: string;
}

export const dropdownTheme: DropdownInterface = keepTw({
  content:
    "w-[16rem] rounded-xl dark:border-metal-800 bg-white dark:bg-metal-900 px-2.5 py-5 z-50 outline-none top-16 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border border-metal-100 ",

  item: "flex cursor-pointer items-center gap-2 rounded-lg p-2.5 text-body-4 font-medium text-metal-600  hover:bg-metal-50 bg-transparent mb-1 dark:text-white dark:hover:bg-metal-800 transition-all duration-200 select-none text-sm outline-none focus:bg-accent focus:bg-metal-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
});

export const dropdownVariant = (property: keyof DropdownInterface) => {
  return cn(dropdownTheme[property]);
};
