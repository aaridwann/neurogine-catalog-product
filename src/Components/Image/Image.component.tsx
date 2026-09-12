/* eslint-disable no-duplicate-imports */
import React, { useEffect, useRef, useState } from 'react';

import { Animated, Image, StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

interface ImageWithSkeletonProps {
  sourceUrl: string;
  style: StyleProp<ViewStyle>;
}

const ImageWithSkeleton = (
  { sourceUrl, style }: ImageWithSkeletonProps,
): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const opacityAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    let animation: Animated.CompositeAnimation | null = null;

    if (isLoading) {
      animation = Animated.loop(
        Animated.sequence([
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      );

      animation.start();
    }

    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [isLoading, opacityAnim]);

  return (
    <View style={[styles.container, style]}>
      {isLoading && (
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            styles.skeleton,
            { opacity: opacityAnim },
          ]}
        />
      )}

      <Image
        source={{ uri: sourceUrl }}
        style={styles.image}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  skeleton: {
    backgroundColor: '#E0E0E0',
    zIndex: 1,
  },
});

export default ImageWithSkeleton;