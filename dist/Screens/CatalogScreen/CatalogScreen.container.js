import React from 'react';
import get from 'lodash/get';
import CatalogProductScreenComponent from './CatalogScreen.component';
import { useCatalogProductInfinite } from '../../Service/CatalogProduct.service';
/**
 * DetailScreenContainer is a container component for the DetailScreen.
 * It is also responsible for handling the navigation events.
 * @param {Object} props - The component props.
 * @param {Object} props.route - The route object.
 * @param {Object} props.navigation - The navigation object.
 * @returns {React.Component} The DetailScreenComponent.
 */
const CatalogProductScreen = ({ route, navigation }) => {
    const [showBottomSheet, setShowBottomSheet] = React.useState(false);
    const { data, isLoading, fetchNextPage, hasNextPage, error } = useCatalogProductInfinite({
        limit: 10,
        search: '',
        category: '',
    });
    const title = get(route, 'params.title');
    const handleGoBack = () => {
        navigation.goBack();
    };
    const products = data?.pages.flatMap((page) => page.products) ?? [];
    return (<CatalogProductScreenComponent route={route} title={title} onGoBack={handleGoBack} products={products} isLoading={isLoading} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} error={error}/>);
};
CatalogProductScreen.displayName = 'CatalogProductScreen';
export default React.memo(CatalogProductScreen);
