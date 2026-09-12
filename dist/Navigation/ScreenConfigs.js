import React from 'react';
import { noop } from 'lodash';
import { CustomHeader } from '../Components/TopHeader/TopHeader.component';
import { CatalogRoutes } from '../Shared';
const CatalogProductScreen = React.lazy(() => import('../Screens/CatalogScreen'));
const HeaderCartButton = React.lazy(() => import('../Components/HeaderCart'));
/**
 * Helper function to render HeaderCartButton
 * @returns {React.ReactNode} HeaderCartButton component
 */
const _renderHeaderCartButton = () => <HeaderCartButton itemCount={13} onPress={noop}/>;
/**
 * Configuration for catalog screens
 * @returns {ScreenConfig<"CatalogProductScreen">} Array of ScreenConfig objects
 */
const CatalogProductScreens = [
    {
        name: CatalogRoutes.CATALOG_PRODUCT_ROUTE,
        component: CatalogProductScreen,
        options: {
            // title: 'Catalog Product Feature',
            // headerStyle: { backgroundColor: '#f3f2f2ff' },
            // headerTintColor: '#000000ff',
            // headerTitleStyle: { fontWeight: 'bold' },
            header: (props) => <CustomHeader {...props}/>,
        },
    },
];
export default CatalogProductScreens;
