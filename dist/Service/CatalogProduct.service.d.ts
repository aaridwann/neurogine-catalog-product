import { type UseInfiniteQueryOptions } from '@Neurogine/core-network';
import type { FetchCatalogParams, CatalogProductResponse } from './CatalogProduct.service.types';
export declare const catalogKeys: Record<string, unknown>;
export declare const useCatalogProductInfinite: (params?: FetchCatalogParams, options?: Partial<UseInfiniteQueryOptions<CatalogProductResponse, Error>>) => import("@tanstack/react-query").UseInfiniteQueryResult<import("@tanstack/query-core").InfiniteData<CatalogProductResponse, unknown>, Error>;
//# sourceMappingURL=CatalogProduct.service.d.ts.map