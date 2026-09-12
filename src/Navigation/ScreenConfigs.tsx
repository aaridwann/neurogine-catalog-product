import React from 'react';

import { View } from 'react-native';

import { noop } from 'lodash';

import GeneralText from '@Neurogine/ui-kit-general-text';
import { VARIANT } from '@Neurogine/ui-kit-general-text/dist/Constants';

import { CustomHeader } from '../Components/TopHeader/TopHeader.component';
import { CatalogRoutes } from '../Shared';

import type { ScreenConfig } from './ScreemConfigs.types';

const CatalogProductScreen = React.lazy(() => import('../Screens/CatalogScreen'));
const HeaderCartButton = React.lazy(() => import('../Components/HeaderCart'));

/**
 * Helper function to render HeaderCartButton
 * @returns {React.ReactNode} HeaderCartButton component
 */
const _renderHeaderCartButton = (): React.ReactNode =>
  <HeaderCartButton itemCount={13} onPress={noop} />;

/**
 * Configuration for catalog screens
 * @returns {ScreenConfig<"CatalogProductScreen">} Array of ScreenConfig objects
 */
const CatalogProductScreens: ScreenConfig<typeof CatalogRoutes.CATALOG_PRODUCT_ROUTE>[] = [
  {
    name: CatalogRoutes.CATALOG_PRODUCT_ROUTE,
    component: CatalogProductScreen,
    options: {
      // title: 'Catalog Product Feature',
      // headerStyle: { backgroundColor: '#f3f2f2ff' },
      // headerTintColor: '#000000ff',
      // headerTitleStyle: { fontWeight: 'bold' },
      header: (props) => <CustomHeader {...props} />,
    },
  },
];

export default CatalogProductScreens;