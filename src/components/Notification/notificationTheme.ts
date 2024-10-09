export type NotificationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

interface KeepNotificationTheme {
  base: string;
  position: {
    topLeft: string;
    topCenter: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
}

export const notificationTheme: KeepNotificationTheme = {
  base: "fixed z-50 grid w-[22rem] gap-y-3 border bg-white p-5 shadow-xLarge data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-xl dark:bg-metal-900 border-0",
  position: {
    topLeft:
      "left-8 top-5 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-top-full",

    topCenter:
      "inset-x-0 top-5 mx-auto data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
    topRight:
      "right-8 top-5 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",

    bottomRight:
      "bottom-5 right-8 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
    bottomLeft:
      "bottom-5 left-8 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-bottom-full",
  },
};
