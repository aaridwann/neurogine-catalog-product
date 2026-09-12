import get from 'lodash/get';

import {
  apiClient,
  createQueryKeys,
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
} from '@Neurogine/core-network';

import { DEFAULT_TAKE, PATH_CATALOG_PRODUCTS } from './Service.configs';

import type { FetchCatalogParams, CatalogProductResponse } from './CatalogProduct.service.types';

export const catalogKeys = createQueryKeys('catalog');

const fetchCatalogProducts = async ({
  skip = 0,
  limit = DEFAULT_TAKE,
  search,
  category,
}: FetchCatalogParams): Promise<CatalogProductResponse> => {
  const { data } = await apiClient.get<CatalogProductResponse>(PATH_CATALOG_PRODUCTS, {
    params: {
      skip,
      limit,
      ...(search ? { search } : {}),
      ...(category ? { category } : {}),
    },
  });

  return data;
};

export const useCatalogProductInfinite = (
  params?: FetchCatalogParams,
  options?: Partial<UseInfiniteQueryOptions<CatalogProductResponse, Error>>,
) => {
  const limit = params?.limit ?? DEFAULT_TAKE;

  return useInfiniteQuery({
    queryKey: catalogKeys.list({ ...params, limit }),
    queryFn: ({ pageParam = 0 }) =>
      fetchCatalogProducts({
        skip: pageParam as number,
        limit,
        search: params?.search,
        category: params?.category,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      // 1. lastPage langsung mereferensi ke CatalogProductResponse dari page terakhir
      const skip = get(lastPage, 'skip', 0);
      const pageLimit = get(lastPage, 'limit', limit);
      const total = get(lastPage, 'total', 0);
      const nextSkip = skip + pageLimit;

      return nextSkip < total ? nextSkip : undefined;
    },
    ...options,
  });
};