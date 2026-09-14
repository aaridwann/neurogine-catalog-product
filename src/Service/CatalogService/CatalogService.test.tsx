import { apiClient } from '@Neurogine/core-network';

import CatalogService, { PATH_CATALOG_PRODUCTS, PATH_SEARCH_PRODUCTS } from './CatalogService';

jest.mock('@Neurogine/core-network', () => ({
  apiClient: {
    get: jest.fn(),
  },
}));

describe('CatalogService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchProductsBySearch', () => {
    it('should fetch products by search query and return product list', async () => {
      const mockResponse = {
        data: {
          products: [
            { id: '1', title: 'Phone' },
            { id: '2', title: 'Laptop' },
          ],
        },
      };

      (apiClient.get as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await CatalogService.fetchProductsBySearch('Phone');

      expect(apiClient.get).toHaveBeenCalledWith(PATH_SEARCH_PRODUCTS, {
        params: { q: 'Phone' },
      });
      expect(result).toEqual(mockResponse.data.products);
    });

    it('should return undefined or handle empty response gracefully if products data is missing', async () => {
      const mockResponse = { data: {} };

      (apiClient.get as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await CatalogService.fetchProductsBySearch('Unknown');

      expect(apiClient.get).toHaveBeenCalledWith(PATH_SEARCH_PRODUCTS, {
        params: { q: 'Unknown' },
      });
      expect(result).toBeUndefined();
    });
  });

  describe('fetchCatalogProducts', () => {
    it('should fetch paginated catalog products with default parameters when none provided', async () => {
      const mockResponse = {
        data: {
          products: [],
          total: 0,
          skip: 0,
          limit: 10,
        },
      };

      (apiClient.get as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await CatalogService.fetchCatalogProducts({});

      expect(apiClient.get).toHaveBeenCalledWith(PATH_CATALOG_PRODUCTS, {
        params: {
          skip: 0,
          limit: 10,
        },
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('should include search and category parameters when provided', async () => {
      const mockResponse = {
        data: {
          products: [{ id: '1', title: 'Shoes' }],
          total: 1,
          skip: 5,
          limit: 5,
        },
      };

      (apiClient.get as jest.Mock).mockResolvedValueOnce(mockResponse);

      const params = {
        skip: 5,
        limit: 5,
        search: 'Shoes',
        category: 'Footwear',
      };

      const result = await CatalogService.fetchCatalogProducts(params);

      expect(apiClient.get).toHaveBeenCalledWith(PATH_CATALOG_PRODUCTS, {
        params: {
          skip: 5,
          limit: 5,
          search: 'Shoes',
          category: 'Footwear',
        },
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('should omit search and category from params if they are falsy or undefined', async () => {
      const mockResponse = {
        data: { products: [], total: 0, skip: 0, limit: 10 },
      };

      (apiClient.get as jest.Mock).mockResolvedValueOnce(mockResponse);

      await CatalogService.fetchCatalogProducts({
        skip: 0,
        limit: 10,
        search: '',
        category: undefined,
      });

      expect(apiClient.get).toHaveBeenCalledWith(PATH_CATALOG_PRODUCTS, {
        params: {
          skip: 0,
          limit: 10,
        },
      });
    });
  });
});