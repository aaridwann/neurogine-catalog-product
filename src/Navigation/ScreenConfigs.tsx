import React from 'react';

import { CustomHeader } from '../Components/TopHeader/TopHeader.component';
import { CatalogRoutes } from '../Shared';

import type { ScreenConfig } from './ScreemConfigs.types';

const CatalogProductScreen = React.lazy(() => import('../Screens/CatalogScreen'));

/**
 * Configuration for catalog screens
 * @returns {ScreenConfig<"CatalogProductScreen">} Array of ScreenConfig objects
 */
const CatalogProductScreens: ScreenConfig<typeof CatalogRoutes.CATALOG_PRODUCT_ROUTE>[] = [
  {
    name: CatalogRoutes.CATALOG_PRODUCT_ROUTE,
    component: CatalogProductScreen,
    options: {
      header: (props) => <CustomHeader {...props} />,
    },
  },
];

export default CatalogProductScreens;