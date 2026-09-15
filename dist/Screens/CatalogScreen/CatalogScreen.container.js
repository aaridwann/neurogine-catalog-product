import React from 'react';
import get from 'lodash/get';
import CatalogProductScreenComponent from './CatalogScreen.component';
import { defaultSearch } from './CatalogScreen.configs';
import useCatalogProductInfinite from '../../Hooks/UseCatalog';
/**
 * DetailScreenContainer is a container component for the DetailScreen.
 * It is also responsible for handling the navigation events.
 * @param {Object} props - The component props.
 * @param {Object} props.route - The route object.
 * @param {Object} props.navigation - The navigation object.
 * @returns {React.Component} The DetailScreenComponent.
 */
const CatalogProductScreen = ({ route, navigation }) => {
    const { data, isLoading, fetchNextPage, hasNextPage, error, onSelectedProduct, refetch, isRefetching, } = useCatalogProductInfinite(navigation, defaultSearch);
    const title = get(route, 'params.title');
    const handleGoBack = () => {
        navigation.goBack();
    };
    const products = data?.pages.flatMap((page) => page.products) ?? [];
    return (<CatalogProductScreenComponent onSelectedProduct={onSelectedProduct} route={route} title={title} onGoBack={handleGoBack} products={products} isLoading={isLoading} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} error={error} onRefresh={refetch} isRefresh={isRefetching}/>);
};
CatalogProductScreen.displayName = 'CatalogProductScreen';
export default React.memo(CatalogProductScreen);
