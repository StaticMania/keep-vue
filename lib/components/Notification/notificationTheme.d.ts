export type NotificationPosition = "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomRight";
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
export declare const notificationTheme: KeepNotificationTheme;
export {};
