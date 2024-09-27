const DrawerStoreKey = "drawer-store";

const [useProvideDrawer, useInjectDrawer] = createInjectionState(
  (position: ComputedRef<string> | Ref<string>) => {
    return { position };
  },

  { injectionKey: DrawerStoreKey },
);

function useDrawer() {
  const drawerState = useInjectDrawer();
  if (!drawerState)
    throw new Error("useDrawer must be used within a <Drawer /> Component");
  return drawerState;
}

export { useDrawer, useProvideDrawer };
