import { apiClient } from '@Neurogine/core-network';
export const PATH_CATALOG_PRODUCTS = '/products';
export const PATH_SEARCH_PRODUCTS = '/products/search';
/**
 * Fetches products by search query
 * @param {string} search Search keyword
 * @returns {Promise<CatalogItem[]>} Product list
 */
const fetchProductsBySearch = async (search) => {
    const { data } = await apiClient.get(PATH_SEARCH_PRODUCTS, {
        params: { q: search },
    });
    return data?.products;
};
/**
 * Fetches paginated catalog products
 * @param {FetchCatalogParams} params Query parameters
 * @returns {Promise<CatalogProductResponse>} Paginated response
 */
const fetchCatalogProducts = async ({ skip = 0, limit = 10, search, category, }) => {
    const { data } = await apiClient.get(PATH_CATALOG_PRODUCTS, {
        params: {
            skip,
            limit,
            ...(search ? { search } : {}),
            ...(category ? { category } : {}),
        },
    });
    return data;
};
export default { fetchCatalogProducts, fetchProductsBySearch };
