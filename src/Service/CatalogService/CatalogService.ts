import { apiClient } from '@Neurogine/core-network';

import type { CatalogItem, CatalogProductResponse, FetchCatalogParams, ResultFetchByQuery } from '../Service.types';

export const PATH_CATALOG_PRODUCTS = '/products';
export const PATH_SEARCH_PRODUCTS = '/products/search';

/**
 * Fetches products by search query
 * @param {string} search Search keyword
 * @returns {Promise<CatalogItem[]>} Product list
 */
const fetchProductsBySearch = async (
  search: string,
): Promise<CatalogItem[]> => {
  const { data } = await apiClient.get<ResultFetchByQuery>(PATH_SEARCH_PRODUCTS, {
    params: { q: search },
  });

  return data?.products;
};

/**
 * Fetches paginated catalog products
 * @param {FetchCatalogParams} params Query parameters
 * @returns {Promise<CatalogProductResponse>} Paginated response
 */
const fetchCatalogProducts = async ({
  skip = 0,
  limit = 10,
  search,
  category,
}: FetchCatalogParams): Promise<CatalogProductResponse> => {
  const { data } = await apiClient.get<CatalogProductResponse>(
    PATH_CATALOG_PRODUCTS,
    {
      params: {
        skip,
        limit,
        ...(search ? { search } : {}),
        ...(category ? { category } : {}),
      },
    },
  );

  return data;
};

export default { fetchCatalogProducts, fetchProductsBySearch };