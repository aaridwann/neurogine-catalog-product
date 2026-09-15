import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
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
    return (_jsx(View, { style: [styles.shimmerBase, style], children: _jsx(Animated.View, { style: [
                StyleSheet.absoluteFill,
                { transform: [{ translateX }] },
            ], children: _jsx(LinearGradient, { colors: ['#E0E0E0', '#F5F5F5', '#E0E0E0'], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: styles.gradient }) }) }));
};
// Render Skeleton saat isLoading = true
const _renderSkeletonContent = () => (_jsx(View, { style: styles.cardContainer, children: _jsxs(View, { style: styles.skeletonContainer, children: [_jsx(ShimmerItem, { style: styles.skeletonTag }), _jsxs(View, { style: styles.skeletonBody, children: [_jsx(ShimmerItem, { style: styles.skeletonTitleLine1 }), _jsx(ShimmerItem, { style: styles.skeletonTitleLine2 }), _jsx(ShimmerItem, { style: styles.skeletonSubtitle }), _jsx(ShimmerItem, { style: styles.skeletonButton })] })] }) }));
const _renderHeader = (tagline) => (_jsx(View, { style: styles.tagContainer, children: _jsx(Text, { style: styles.tagText, children: tagline }) }));
const _renderBody = ({ title, subtitle, buttonText, }) => (_jsxs(View, { style: styles.contentContainer, children: [_jsx(Text, { style: styles.titleText, numberOfLines: 2, children: title }), _jsx(Text, { style: styles.subtitleText, numberOfLines: 2, children: subtitle }), _jsx(View, { style: styles.ctaButton, children: _jsx(Text, { style: styles.ctaButtonText, children: buttonText }) })] }));
const MainCard = ({ title = 'Explore Our Latest Features', subtitle = 'Discover seamless digital banking experience powered by modern modular architecture.', tagline = 'PROMOTED', buttonText = 'Explore Now', imageUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80', isLoading = false, onPress, }) => {
    if (isLoading)
        return _renderSkeletonContent();
    return (_jsx(TouchableOpacity, { activeOpacity: 0.9, onPress: onPress, style: styles.cardContainer, children: _jsx(ImageBackground, { source: { uri: imageUrl }, style: styles.imageBackground, imageStyle: styles.imageStyle, children: _jsxs(LinearGradient, { colors: ['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.85)'], style: styles.gradientOverlay, children: [_renderHeader(tagline), _renderBody({ title, subtitle, buttonText })] }) }) }));
};
export default MainCard;
