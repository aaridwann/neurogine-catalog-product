import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { CustomHeader } from '../Components/TopHeader/TopHeader.component';
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
            header: (props) => _jsx(CustomHeader, { ...props }),
        },
    },
];
export default CatalogProductScreens;
