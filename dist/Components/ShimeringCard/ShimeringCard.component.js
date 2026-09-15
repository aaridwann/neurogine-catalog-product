import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, { CARD_WIDTH } from './ShimeringCard.component.styles';
const ShimmerItem = ({ style }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const startAnimation = () => {
            animatedValue.setValue(0);
            Animated.loop(Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear,
                useNativeDriver: true,
            })).start();
        };
        startAnimation();
    }, [animatedValue]);
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-CARD_WIDTH, CARD_WIDTH],
    });
    return (_jsx(View, { style: [styles.shimmerBase, style], children: _jsx(Animated.View, { style: [StyleSheet.absoluteFill, { transform: [{ translateX }] }], children: _jsx(LinearGradient, { colors: ['#E0E0E0', '#F5F5F5', '#E0E0E0'], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: styles.gradient }) }) }));
};
/**
 * Shimmering Cad product
 * @returns {ReactNode} - Shimmering Cad product
 */
const ShimmeringCardProduct = () => {
    return (_jsxs(View, { style: styles.cardContainer, children: [_jsx(ShimmerItem, { style: styles.imageSkeleton }), _jsxs(View, { style: styles.contentContainer, children: [_jsx(ShimmerItem, { style: styles.categorySkeleton }), _jsx(ShimmerItem, { style: styles.titleSkeletonLine1 }), _jsx(ShimmerItem, { style: styles.titleSkeletonLine2 }), _jsxs(View, { style: styles.footerRow, children: [_jsx(ShimmerItem, { style: styles.badgeSkeleton }), _jsx(ShimmerItem, { style: styles.priceSkeleton })] })] })] }));
};
export default ShimmeringCardProduct;
