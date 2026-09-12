import { useCallback } from 'react';
import get from 'lodash/get';
import { useInfiniteQuery } from '@Neurogine/core-network';
import CatalogService from '../../Service/CatalogService';
export const catalogKeys = {
    all: ['catalog'],
    lists: () => [...catalogKeys.all, 'list'],
    list: (params) => [...catalogKeys.lists(), params],
    details: () => [...catalogKeys.all, 'detail'],
    detail: (id) => [...catalogKeys.details(), id],
};
/**
 * _getConfigsInfiniteQuery is a helper to get configurations for the useInfiniteQuery hook.
 * @param params - Fetch catalog products parameters.
 * @param limit - The limit for the query.
 * @returns {object} Object contains configurations for the useInfiniteQuery hook.
 */
const _getConfigsInfiniteQuery = (params, limit) => ({
    queryKey: catalogKeys?.list({ ...params, limit }),
    queryFn: ({ pageParam = 0 }) => CatalogService.fetchCatalogProducts({
        skip: pageParam,
        limit,
        search: params?.search,
        category: params?.category,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
        const skip = get(lastPage, 'skip', 0);
        const pageLimit = get(lastPage, 'limit', limit);
        const total = get(lastPage, 'total', 0);
        const nextSkip = skip + pageLimit;
        return nextSkip < total ? nextSkip : undefined;
    },
});
const DEFAULT_TAKE = 10;
const _onSelectedProductHandler = (id, navigation) => {
    // Todo need change route name to from constants shared file
    navigation.navigate('DetailScreen', { id });
};
const _onFavoriteProductHandler = (_id) => {
    // TODO: Handle favorite product action
};
const _onAddToCartProductHandler = (_id) => {
    // TODO: Handle add to cart product action
};
export const useCatalogProductInfinite = (navigation, params, options) => {
    const limit = params?.limit ?? DEFAULT_TAKE;
    const onSelectedProduct = useCallback((id) => _onSelectedProductHandler(id, navigation), [navigation]);
    const onFavoriteProduct = useCallback(_onFavoriteProductHandler, [navigation]);
    const onAddToCartProduct = useCallback(_onAddToCartProductHandler, [navigation]);
    const query = useInfiniteQuery({ ..._getConfigsInfiniteQuery(params, limit), ...options });
    return {
        ...query,
        onSelectedProduct,
        onFavoriteProduct,
        onAddToCartProduct,
    };
};
export default useCatalogProductInfinite;
