import { useCallback } from 'react';

import get from 'lodash/get';

import { useInfiniteQuery } from '@Neurogine/core-network';

import CatalogService from '../../Service/CatalogService';

import type { UseCatalogInfiniteOptions, UseCatalogInfiniteResult } from './UseCatalog.hooks.types';
import type { FetchCatalogParams } from '../../Service/Service.types';
import type { Navigation } from '../../Types';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const catalogKeys = {
  all: ['catalog'] as const,
  lists: () => [...catalogKeys.all, 'list'] as const,
  list: (params?: FetchCatalogParams) => [...catalogKeys.lists(), params] as const,
  details: () => [...catalogKeys.all, 'detail'] as const,
  detail: (id: string) => [...catalogKeys.details(), id] as const,
};

/**
 * _getConfigsInfiniteQuery is a helper to get configurations for the useInfiniteQuery hook.
 * @param params - Fetch catalog products parameters.
 * @param limit - The limit for the query.
 * @returns {object} Object contains configurations for the useInfiniteQuery hook.
 */
const _getConfigsInfiniteQuery = (params: FetchCatalogParams, limit: number) => ({
  queryKey: catalogKeys?.list({ ...params, limit }),
  queryFn: ({ pageParam = 0 }) =>
    CatalogService.fetchCatalogProducts({
      skip: pageParam as number,
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

const _onSelectedProductHandler = (id: string, navigation: Navigation): void => {

  // Todo need change route name to from constants shared file
  navigation.navigate('DetailScreen', { id });
};

const _onFavoriteProductHandler = (_id: string) => {
  // TODO: Handle favorite product action

};

const _onAddToCartProductHandler = (_id: string) => {
  // TODO: Handle add to cart product action
};

export const useCatalogProductInfinite = (
  navigation: NativeStackNavigationProp<ParamListBase>,
  params?: FetchCatalogParams,
  options?: UseCatalogInfiniteOptions,
): UseCatalogInfiniteResult => {
  const limit = params?.limit ?? DEFAULT_TAKE;

  const onSelectedProduct = useCallback((id: string) =>
    _onSelectedProductHandler(id, navigation), [navigation]);

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