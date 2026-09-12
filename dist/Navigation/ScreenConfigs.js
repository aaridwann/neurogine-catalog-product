import React from 'react';
import { CatalogRoutes } from '../Shared';
const CatalogProductScreen = React.lazy(() => import('../Screens/CatalogScreen'));
/**
 * Configuration for catalog screens
 * @returns {ScreenConfig<"CatalogProductScreen">} Array of ScreenConfig objects
 */
const CatalogProductScreens = [
    {
        name: CatalogRoutes.CATALOG_PRODUCT_ROUTE,
        component: CatalogProductScreen,
        options: {
            title: 'Catalog Product Feature',
            headerStyle: { backgroundColor: '#9d6712ff' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        },
    },
];
export default CatalogProductScreens;
