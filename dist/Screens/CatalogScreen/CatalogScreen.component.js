import { jsx as _jsx } from "react/jsx-runtime";
import { FlatList, RefreshControl, View } from 'react-native';
import { noop } from 'lodash';
import AdBannerList from './AdsSection/AdsSection.component';
import styles from './CatalogScreen.styles';
import CardComponent from '../../Components/Card/Card.component';
import ShimmeringCardProduct from '../../Components/ShimeringCard';
const _renderSpecialSection = (isLoading) => (_jsx(View, { style: styles.specialContentWrapper, children: _jsx(AdBannerList, { isLoading: isLoading }) }));
const _renderShimmering = () => (_jsx(View, { style: styles.emptyGridContainer, children: Array.from({ length: 6 }).map((_, index) => (_jsx(View, { style: styles.cardWrapper, children: _jsx(ShimmeringCardProduct, {}) }, index))) }));
const _gerPropsPullToRefresh = (refreshing, onRefresh) => ({
    refreshControl: _jsx(RefreshControl, { colors: ['#3aa6ffff', '#6db5ffff'], onRefresh: onRefresh, progressBackgroundColor: "#FFFFFF", refreshing: refreshing, tintColor: "#3aa6ffff", title: 'Loading...', titleColor: "#3aa6ffff" }),
});
/**
 * Helper function to get FlatList products props
 * @param {CatalogItem[]} products - Array of catalog products
 * @param {boolean} hasNextPage - Whether there is a next page
 * @param {VoidFunction} fetchNextPage - Callback function to fetch the next page
 * @returns {FlatListProps<CatalogItem>} FlatList props for products
 */
const _getFlatListProductsProps = ({ products, hasNextPage, fetchNextPage, onSelectedProduct, isLoading, isRefresh, onRefresh, }) => ({
    ..._gerPropsPullToRefresh(isRefresh, onRefresh),
    ListHeaderComponent: () => _renderSpecialSection(isLoading || isRefresh),
    ListEmptyComponent: _renderShimmering,
    data: products,
    numColumns: 2,
    keyExtractor: (item) => item.id.toString(),
    onEndReached: () => hasNextPage && fetchNextPage(),
    onEndReachedThreshold: 0.7,
    columnWrapperStyle: styles.columnWrapper,
    contentContainerStyle: styles.listContainer,
    showsHorizontalScrollIndicator: false,
    renderItem: ({ item }) => isRefresh ? _renderShimmering() : _jsx(CardComponent, { data: item, onFavoritePress: noop, onAddToCartPress: noop, onCardPress: onSelectedProduct }),
});
/**
 * CatalogProductScreenComponent is a component for the CatalogProductScreen.
 * It is responsible for displaying the data from the Redux store.
 * @param {Object} props - The component props.
 * @param {Object} props.onGoBack - The callback function to go back.
 * @returns {React.Component} The CatalogProductScreenComponent.
 */
const CatalogProductScreenComponent = ({ onSelectedProduct, products, fetchNextPage, hasNextPage, isLoading, onRefresh, isRefresh }) => {
    return (_jsx(View, { style: styles.container, children: _jsx(FlatList, { ..._getFlatListProductsProps({
                products, hasNextPage, fetchNextPage, onSelectedProduct,
                isLoading, isRefresh, onRefresh,
            }) }) }));
};
export default CatalogProductScreenComponent;
