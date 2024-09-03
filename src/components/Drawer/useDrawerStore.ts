const DrawerStoreKey = "drawer-store";

const [useProvideDrawerStore, useDrawerStore] = createInjectionState(
  (position: ComputedRef<string> | Ref<string>) => {
    return { position };
  },

  { injectionKey: DrawerStoreKey },
);

export { useProvideDrawerStore };

export function useDrawerStoreOrThrow() {
  const drawerStore = useDrawerStore();
  if (drawerStore == null)
    throw new Error(
      "Please call `useProvideDrawerStore` on the appropriate parent component",
    );
  return drawerStore;
}
