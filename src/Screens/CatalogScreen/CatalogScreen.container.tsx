import React from 'react';

import get from 'lodash/get';

import CatalogProductScreenComponent from './CatalogScreen.component';
import { defaultSearch } from './CatalogScreen.configs';
import useCatalogProductInfinite from '../../Hooks/UseCatalog';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

/**
 * DetailScreenContainer is a container component for the DetailScreen.
 * It is also responsible for handling the navigation events.
 * @param {Object} props - The component props.
 * @param {Object} props.route - The route object.
 * @param {Object} props.navigation - The navigation object.
 * @returns {React.Component} The DetailScreenComponent.
 */
const CatalogProductScreen: React.ComponentType<NativeStackScreenProps<ParamListBase, 'CatalogProductScreen'>> = ({ route, navigation }) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error,
    onSelectedProduct,
  } = useCatalogProductInfinite(navigation, defaultSearch);

  const title = get(route, 'params.title') as string | undefined;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <CatalogProductScreenComponent
      onSelectedProduct={onSelectedProduct}
      route={route}
      title={title}
      onGoBack={handleGoBack}
      products={products}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      error={error}
    />
  );
};

CatalogProductScreen.displayName = 'CatalogProductScreen';

export default React.memo(CatalogProductScreen);