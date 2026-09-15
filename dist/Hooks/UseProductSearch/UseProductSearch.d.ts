declare const useProductSearch: () => {
    data: import("../../Service/Service.types").CatalogItem[] | undefined;
    isLoading: boolean;
    error: Error | null;
    isFetching: boolean;
    isFetched: boolean;
};
export default useProductSearch;
//# sourceMappingURL=UseProductSearch.d.ts.map