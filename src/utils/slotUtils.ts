import type { Slot, VNode } from "vue";

export function isSlotValidHTMLElement(
  slots: Record<string, Slot | undefined>,
): boolean {
  const children = slots.default?.();
  console.log(children);

  if (children && children.length === 1) {
    return children.every((vnode: VNode) => {
      return typeof vnode.type === "string";
    });
  }
  return false;
}
