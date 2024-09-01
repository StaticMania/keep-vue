type RatingContextProps = (value: number | undefined) => void;

// custom injectionKey
const RatingStoreKey = "rating-store";

const [useProvideRatingStore, useRatingStore] = createInjectionState(
  (handleRating: RatingContextProps | undefined) => {
    return { handleRating };
  },
  { injectionKey: RatingStoreKey },
);

export { useProvideRatingStore };

export function useRatingStoreOrThrow() {
  const ratingStore = useRatingStore();
  if (ratingStore == null)
    throw new Error(
      "Please call `useProvideRatingStore` on the appropriate parent component",
    );
  return ratingStore;
}
