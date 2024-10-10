type RatingContextProps = (value: number | undefined) => void;
declare const useProvideRatingStore: (handleRating: RatingContextProps | undefined) => {
    handleRating: RatingContextProps | undefined;
};
declare function useRatingStoreOrThrow(): {
    handleRating: RatingContextProps | undefined;
};
export { useProvideRatingStore, useRatingStoreOrThrow };
