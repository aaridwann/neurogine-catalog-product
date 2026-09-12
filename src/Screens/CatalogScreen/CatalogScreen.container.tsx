import React, { ComponentType } from 'react';

import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import get from 'lodash/get';

import CatalogProductScreenComponent from './CatalogScreen.component';

/**
 * DetailScreenContainer is a container component for the DetailScreen.
 * It is also responsible for handling the navigation events.
 * @param {Object} props - The component props.
 * @param {Object} props.route - The route object.
 * @param {Object} props.navigation - The navigation object.
 * @returns {React.Component} The DetailScreenComponent.
 */
const CatalogProductScreen: ComponentType<NativeStackScreenProps<ParamListBase, "CatalogProductScreen">> = ({ route, navigation }) => {

  const title = get(route, 'params.title') as string | undefined;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <CatalogProductScreenComponent
      route={route}
      title={title}
      onGoBack={handleGoBack}
    />
  );
};

CatalogProductScreen.displayName = 'CatalogProductScreen';

export default React.memo(CatalogProductScreen);