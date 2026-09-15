import { jsx as _jsx } from "react/jsx-runtime";
import { FlatList, StyleSheet, View, Dimensions, } from 'react-native';
import MainCard from '../../../Components/MainCard';
import { AD_DATA } from '../../../Fixture/AdsData';
const { width } = Dimensions.get('window');
const AdBannerList = ({ isLoading }) => {
    const handlePressCard = (item) => {
        console.log('Card clicked:', item.title);
    };
    const renderItem = ({ item }) => (_jsx(View, { style: styles.cardWrapper, children: _jsx(MainCard, { isLoading: isLoading, title: item.title, subtitle: item.subtitle, tagline: item.tagline, buttonText: item.buttonText, imageUrl: item.imageUrl, onPress: () => handlePressCard(item) }) }));
    return (_jsx(FlatList, { data: AD_DATA, renderItem: renderItem, keyExtractor: (item) => item.id, horizontal: true, showsHorizontalScrollIndicator: false, pagingEnabled: true, decelerationRate: "fast", snapToInterval: width - 32, snapToAlignment: "center", contentContainerStyle: styles.flatListContent }));
};
export default AdBannerList;
const styles = StyleSheet.create({
    flatListContent: {
        paddingHorizontal: 16,
    },
    cardWrapper: {
        marginTop: 12,
        marginRight: 12,
    },
});
