import type {
  InfiniteData,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@Neurogine/core-network';

import type { catalogKeys } from './UseCatalog.hooks';
import type { CatalogProductResponse } from '../../Service/Service.types';

export type UseCatalogInfiniteOptions = Partial<
  UseInfiniteQueryOptions<
    CatalogProductResponse,
    Error,
    InfiniteData<CatalogProductResponse>,
    ReturnType<typeof catalogKeys.list>,
    number
  >
>;

export type UseCatalogInfiniteResult = UseInfiniteQueryResult<
  InfiniteData<CatalogProductResponse>,
  Error
> & {
  onSelectedProduct: (id: string) => void;
  onFavoriteProduct: (id: string) => void;
  onAddToCartProduct: (id: string) => void;
};