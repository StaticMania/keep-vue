import type { Slot, VNode } from "vue";

export function isSlotValidHTMLElement(
  slots: Record<string, Slot | undefined>,
): boolean {
  const defaultSlot = slots.default?.();
  if (defaultSlot && defaultSlot.length > 0) {
    return defaultSlot.every((vnode: VNode) => {
      return typeof vnode.type === "string";
    });
  }
  return false;
}
