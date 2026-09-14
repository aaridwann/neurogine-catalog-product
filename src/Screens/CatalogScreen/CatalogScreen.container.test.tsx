/* eslint-disable prefer-destructuring */
import React from 'react';

import { render } from '@testing-library/react-native';

import CatalogProductScreenContainer from './CatalogScreen.container';
import useCatalogProductInfinite from '../../Hooks/UseCatalog';

jest
  .mock('../../Hooks/UseCatalog', () => ({
    __esModule: true,
    default: jest.fn(),
  }))
  .mock('./CatalogScreen.component', () => ({
    __esModule: true,
    default: (props: any) => MockCatalogScreenComponent(props),
  }));

const MockCatalogScreenComponent = jest.fn(() => null);

describe('CatalogProductScreenContainer Container', () => {
  const mockNavigation = {
    goBack: jest.fn(),
    navigate: jest.fn(),
  } as any;

  const mockRoute = {
    key: 'catalog-route-key',
    name: 'CatalogProductScreen',
    params: { title: 'Electronics Catalog' },
  } as any;

  const mockHookReturnValue = {
    data: {
      pages: [
        { products: [{ id: '1', title: 'Laptop' }] },
        { products: [{ id: '2', title: 'Smartphone' }] },
      ],
    },
    isLoading: false,
    fetchNextPage: jest.fn(),
    hasNextPage: true,
    error: null,
    onSelectedProduct: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useCatalogProductInfinite as jest.Mock).mockReturnValue(mockHookReturnValue);
  });

  it('should render CatalogProductScreenComponent and pass correct mapped props', async () => {
    await render(<CatalogProductScreenContainer route={mockRoute} navigation={mockNavigation} />);

    expect(MockCatalogScreenComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Electronics Catalog',
        products: [
          { id: '1', title: 'Laptop' },
          { id: '2', title: 'Smartphone' },
        ],
        isLoading: false,
        hasNextPage: true,
        error: null,
      }),
    );
  });

  it('should handle goBack navigation correctly when onGoBack is triggered', async () => {
    await render(<CatalogProductScreenContainer route={mockRoute} navigation={mockNavigation} />);

    const componentProps = MockCatalogScreenComponent.mock.calls[0][0];

    componentProps.onGoBack();

    expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
  });

  it('should handle fallback title and empty products gracefully when data is undefined', async () => {
    (useCatalogProductInfinite as jest.Mock).mockReturnValue({
      ...mockHookReturnValue,
      data: undefined,
    });

    const routeWithoutParams = {
      ...mockRoute,
      params: undefined,
    };

    await render(<CatalogProductScreenContainer
      route={routeWithoutParams}
      navigation={mockNavigation}
    />);

    expect(MockCatalogScreenComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        title: undefined,
        products: [],
      }),
    );
  });
});