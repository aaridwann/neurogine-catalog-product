import { runSnapshotTests } from '../../Utils/Test/Test.utils';

import CatalogProductScreenComponent from './CatalogScreen.component';

describe('Catalog Product Screen Component snap test', () => {
  const mockProductItem = {
    id: '1',
    title: 'Sample Product',
    price: 100000,
    image: 'https://via.placeholder.com/150',
  };

  const configs = [
    {
      props: {
        route: { key: 'catalog-1', name: 'CatalogProductScreen' },
        title: 'Catalog Products',
        onGoBack: jest.fn(),
        products: [mockProductItem],
        fetchNextPage: jest.fn(),
        isLoading: false,
        hasNextPage: true,
        error: null,
        onSelectedProduct: jest.fn(),
      },
      desc: 'should render correctly with default items and title',
    },
    {
      props: {
        route: { key: 'catalog-2', name: 'CatalogProductScreen' },
        title: 'Loading Catalog',
        onGoBack: jest.fn(),
        products: [],
        fetchNextPage: jest.fn(),
        isLoading: true,
        hasNextPage: false,
        error: null,
        onSelectedProduct: jest.fn(),
      },
      desc: 'should render correctly in loading state with empty products',
    },
    {
      props: {
        route: { key: 'catalog-3', name: 'CatalogProductScreen' },
        title: 'Error Catalog',
        onGoBack: jest.fn(),
        products: [],
        fetchNextPage: jest.fn(),
        isLoading: false,
        hasNextPage: false,
        error: new Error('Failed to fetch products'),
        onSelectedProduct: jest.fn(),
      },
      desc: 'should render correctly when an error occurs',
    },
  ];

  runSnapshotTests(CatalogProductScreenComponent, configs);
});