import { catalogProductReducer } from './CatalogProduct.reducer';
import { CatalogActionConstants } from '../../Shared';

import type { CatalogProductState } from './CatalogProduct.reducer.types';

describe('catalogProductReducer', () => {
  const initialState: CatalogProductState = {
    data: [],
    loading: false,
    error: null,
  };

  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'UNKNOWN_ACTION' } as any;
    const result = catalogProductReducer(undefined, action);

    expect(result).toEqual(initialState);
  });

  it('should handle SET_DATA_CATALOG_PRODUCT correctly', () => {
    const mockProducts = [{ id: '1', title: 'Product A' }, { id: '2', title: 'Product B' }];

    const action = {
      type: CatalogActionConstants.SET_DATA_CATALOG_PRODUCT,
      payload: mockProducts,
    };

    const result = catalogProductReducer(initialState, action);

    expect(result).toEqual({
      ...initialState,
      data: mockProducts,
    });
  });

  it('should handle GET_CATALOG_PRODUCT_REQUEST correctly', () => {
    const prevState: CatalogProductState = {
      data: [],
      loading: false,
      error: 'Previous error',
    };

    const action = {
      type: CatalogActionConstants.GET_CATALOG_PRODUCT_REQUEST,
    };

    const result = catalogProductReducer(prevState, action);

    expect(result).toEqual({
      ...prevState,
      loading: true,
      error: null, // Memastikan error dibersihkan saat request baru dimulai
    });
  });

  it('should handle GET_CATALOG_PRODUCT_SUCCESS correctly', () => {
    const prevState: CatalogProductState = {
      data: [],
      loading: true,
      error: null,
    };

    const mockProducts = [{ id: '3', title: 'Product C' }];

    const action = {
      type: CatalogActionConstants.GET_CATALOG_PRODUCT_SUCCESS,
      payload: mockProducts,
    };

    const result = catalogProductReducer(prevState, action);

    expect(result).toEqual({
      ...prevState,
      loading: false,
      data: mockProducts,
    });
  });

  it('should handle GET_CATALOG_PRODUCT_FAILED correctly', () => {
    const prevState: CatalogProductState = {
      data: [],
      loading: true,
      error: null,
    };

    const mockError = new Error('Failed to fetch catalog');

    const action = {
      type: CatalogActionConstants.GET_CATALOG_PRODUCT_FAILED,
      payload: mockError,
    };

    const result = catalogProductReducer(prevState, action);

    expect(result).toEqual({
      ...prevState,
      loading: false,
      error: mockError,
    });
  });
});