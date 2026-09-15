import React, { useEffect, useRef } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Animated, Easing, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './MainCard.component.styles';
const ShimmerItem = ({ style }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const animation = Animated.loop(Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1200,
            easing: Easing.linear,
            useNativeDriver: true,
        }));
        animation.start();
        return () => animation.stop();
    }, [animatedValue]);
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 300],
    });
    return (<View style={[styles.shimmerBase, style]}>
      <Animated.View style={[
            StyleSheet.absoluteFill,
            { transform: [{ translateX }] },
        ]}>
        <LinearGradient colors={['#E0E0E0', '#F5F5F5', '#E0E0E0']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}/>
      </Animated.View>
    </View>);
};
// Render Skeleton saat isLoading = true
const _renderSkeletonContent = () => (<View style={styles.cardContainer}>
    <View style={styles.skeletonContainer}>
      <ShimmerItem style={styles.skeletonTag}/>
      <View style={styles.skeletonBody}>
        <ShimmerItem style={styles.skeletonTitleLine1}/>
        <ShimmerItem style={styles.skeletonTitleLine2}/>
        <ShimmerItem style={styles.skeletonSubtitle}/>
        <ShimmerItem style={styles.skeletonButton}/>
      </View>
    </View>
  </View>);
const _renderHeader = (tagline) => (<View style={styles.tagContainer}>
    <Text style={styles.tagText}>{tagline}</Text>
  </View>);
const _renderBody = ({ title, subtitle, buttonText, }) => (<View style={styles.contentContainer}>
    <Text style={styles.titleText} numberOfLines={2}>
      {title}
    </Text>

    <Text style={styles.subtitleText} numberOfLines={2}>
      {subtitle}
    </Text>

    <View style={styles.ctaButton}>
      <Text style={styles.ctaButtonText}>{buttonText}</Text>
    </View>
  </View>);
const MainCard = ({ title = 'Explore Our Latest Features', subtitle = 'Discover seamless digital banking experience powered by modern modular architecture.', tagline = 'PROMOTED', buttonText = 'Explore Now', imageUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80', isLoading = false, onPress, }) => {
    if (isLoading) {
        return _renderSkeletonContent();
    }
    return (<TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.cardContainer}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground} imageStyle={styles.imageStyle}>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.85)']} style={styles.gradientOverlay}>
          {_renderHeader(tagline)}
          {_renderBody({ title, subtitle, buttonText })}
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>);
};
export default MainCard;
