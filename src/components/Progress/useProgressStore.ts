const [useProvideProgressStore, useProgressStore] = createInjectionState(
  (initialProgress = 0) => {
    //state
    const progress = ref(initialProgress);

    const progressBar = ref(0);

    watch(
      progress,
      (newValue) => {
        const timer = setTimeout(() => {
          progressBar.value = newValue;
        }, 200);

        //side Effect return
        return () => clearTimeout(timer);
      },
      { immediate: true },
    );

    return { progressBar };
  },
);

export { useProgressStore, useProvideProgressStore };
