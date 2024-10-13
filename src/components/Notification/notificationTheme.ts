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
  base: "z-50 w-full max-w-[24rem] rounded-xl bg-white p-5 shadow-xLarge fixed dark:bg-metal-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 border border-metal-100 dark:border-metal-800",
  position: {
    topLeft:
      "top-5 left-5 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-top",

    topCenter:
      "inset-x-5 top-5 mx-auto data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
    topRight:
      "top-5 right-5 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-top",

    bottomRight:
      "bottom-5 right-5 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-bottom",
    bottomLeft:
      "bottom-5 left-5 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-bottom",
  },
};
