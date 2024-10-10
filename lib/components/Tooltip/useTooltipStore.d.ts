import type { ComputedRef } from "vue";
declare const useProvideTooltip: (color: ComputedRef<"primary" | "secondary" | "success" | "warning" | "error">) => {
    color: ComputedRef<"primary" | "secondary" | "success" | "warning" | "error">;
};
declare function useTooltip(): {
    color: ComputedRef<"primary" | "secondary" | "success" | "warning" | "error">;
};
export { useProvideTooltip, useTooltip };
