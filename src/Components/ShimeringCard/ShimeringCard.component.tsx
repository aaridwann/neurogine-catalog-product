import React, { useEffect, useRef, type ReactNode } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles, { CARD_WIDTH } from './ShimeringCard.component.styles';

import type { ShimmerItemProps } from './ShimeringCard.component.types';

const ShimmerItem: React.FC<ShimmerItemProps> = ({ style }): ReactNode => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      animatedValue.setValue(0);
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    startAnimation();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-CARD_WIDTH, CARD_WIDTH],
  });

  return (
    <View style={[styles.shimmerBase, style]}>
      <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ translateX }] }]}>
        <LinearGradient
          colors={['#E0E0E0', '#F5F5F5', '#E0E0E0']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};

/**
 * Shimmering Cad product
 * @returns {ReactNode} - Shimmering Cad product
 */
const ShimmeringCardProduct: React.FC = (): ReactNode => {
  return (
    <View style={styles.cardContainer}>
      {/* 1. Thumbnail Image Skeleton */}
      <ShimmerItem style={styles.imageSkeleton} />
      <View style={styles.contentContainer}>
        {/* Category Tag Skeleton */}
        <ShimmerItem style={styles.categorySkeleton} />

        {/* Title Lines (2 Baris) */}
        <ShimmerItem style={styles.titleSkeletonLine1} />
        <ShimmerItem style={styles.titleSkeletonLine2} />

        {/* Price & Rating Section */}
        <View style={styles.footerRow}>
          <ShimmerItem style={styles.badgeSkeleton} />
          <ShimmerItem style={styles.priceSkeleton} />
        </View>
      </View>
    </View>
  );
};

export default ShimmeringCardProduct;
