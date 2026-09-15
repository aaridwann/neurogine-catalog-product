import type { CatalogItem, CatalogProductResponse, FetchCatalogParams } from '../Service.types';
export declare const PATH_CATALOG_PRODUCTS = "/products";
export declare const PATH_SEARCH_PRODUCTS = "/products/search";
declare const _default: {
    fetchCatalogProducts: ({ skip, limit, search, category, }: FetchCatalogParams) => Promise<CatalogProductResponse>;
    fetchProductsBySearch: (search: string) => Promise<CatalogItem[]>;
};
export default _default;
//# sourceMappingURL=CatalogService.d.ts.map