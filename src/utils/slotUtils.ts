import type { Slot, VNode } from "vue";

export function isSlotValidHTMLElement(
  slots: Record<string, Slot | undefined>,
): boolean {
  const children = slots.default?.();

  if (children && children?.length > 1) {
    throw new Error("You can pass only one children while using asChild");
  }
  if (children && children.length === 1) {
    return children.every((vnode: VNode) => {
      return typeof vnode.type === "string";
    });
  }
  return false;
}
