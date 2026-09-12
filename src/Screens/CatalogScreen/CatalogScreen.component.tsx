import React from 'react';

import { ActivityIndicator, FlatList, View, type FlatListProps  } from 'react-native';

import { noop } from 'lodash';

import styles from './CatalogScreen.styles';
import CardComponent from '../../Components/Card/Card.component';

import type { CatalogProductScreenComponentProps } from './CatalogScreen.types';
import type { CatalogItem } from '../../Service/CatalogProduct.service.types';
import type { VoidFunction } from '../../Types';

/**
 * Helper function to get FlatList products props
 * @param {CatalogItem[]} products - Array of catalog products
 * @param {boolean} hasNextPage - Whether there is a next page
 * @param {VoidFunction} fetchNextPage - Callback function to fetch the next page
 * @returns {FlatListProps<CatalogItem>} FlatList props for products
 */
const _getFlatListProductsProps =(
  products: CatalogItem[],
  hasNextPage: boolean,
  fetchNextPage: VoidFunction,
): FlatListProps<CatalogItem> => ({
  data: products,
  numColumns: 2,
  keyExtractor: (item: CatalogItem) => item.id.toString(),
  onEndReached: () => hasNextPage && fetchNextPage(),
  onEndReachedThreshold: 0.7,
  columnWrapperStyle: styles.columnWrapper,
  contentContainerStyle: styles.listContainer,
  renderItem: ({ item }: { item: CatalogItem }) =>
    <CardComponent
      data={item}
      onFavoritePress={noop}
      onAddToCartPress={noop}
      onCardPress={noop}
    />,
});

/**
 * CatalogProductScreenComponent is a component for the CatalogProductScreen.
 * It is responsible for displaying the data from the Redux store.
 * @param {Object} props - The component props.
 * @param {Object} props.onGoBack - The callback function to go back.
 * @returns {React.Component} The CatalogProductScreenComponent.
 */
const CatalogProductScreenComponent: React.FC<CatalogProductScreenComponentProps> =
({ products, fetchNextPage, hasNextPage, isLoading }) => {
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> :
        <FlatList {..._getFlatListProductsProps(products, hasNextPage, fetchNextPage)}/>
      }
    </View>
  );
};

export default CatalogProductScreenComponent;
