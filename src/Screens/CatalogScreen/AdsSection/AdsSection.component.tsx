import React, { type ReactNode } from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  type ListRenderItem,
} from 'react-native';

import MainCard from '../../../Components/MainCard';
import { AD_DATA, type AdItem } from '../../../Fixture/AdsData';

const { width } = Dimensions.get('window');

const AdBannerList = ({ isLoading }: {isLoading: boolean}): ReactNode => {
  const handlePressCard = (item: AdItem) => {
    console.log('Card clicked:', item.title);
  };

  const renderItem: ListRenderItem<AdItem> = ({ item }) => (
    <View style={styles.cardWrapper}>
      <MainCard
        isLoading={isLoading}
        title={item.title}
        subtitle={item.subtitle}
        tagline={item.tagline}
        buttonText={item.buttonText}
        imageUrl={item.imageUrl}
        onPress={() => handlePressCard(item)}
      />
    </View>
  );

  return (
    <FlatList
      data={AD_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={width - 32}
      snapToAlignment="center"
      contentContainerStyle={styles.flatListContent}
    />
  );
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