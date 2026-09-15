export interface CatalogProductState {
    data: Record<string, unknown>[];
    loading: boolean;
    error: unknown;
}
export interface CatalogProductAction {
    type: string;
    payload: CatalogProductState['data'];
}
//# sourceMappingURL=CatalogProduct.reducer.types.d.ts.map