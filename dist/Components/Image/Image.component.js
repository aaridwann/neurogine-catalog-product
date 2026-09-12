import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, View, } from 'react-native';
import styles from './Image.component.styles';
/**
 * Render loading image component
 * @param {boolean} isLoading - Boolean to check if image is loading
 * @param {Animated.AnimatedInterpolation<number>} opacityAnim - Animated value for opacity
 * @returns {React.ReactElement | null} React.ReactElement | null
 */
const _renderLoadingImage = (isLoading, opacityAnim) => {
    if (!isLoading)
        return null;
    return (<Animated.View style={[
            StyleSheet.absoluteFill,
            styles.skeleton,
            { opacity: opacityAnim },
        ]}/>);
};
/**
 * Render image component
 * @param {string} sourceUrl - URL of the image
 * @param {ImageStyle} style - Style for the image
 * @param {VoidFunction} onLoadEnd - Callback function to be called when image has finished loading
 * @returns {React.ReactElement} React.ReactElement
 */
const _renderImage = (sourceUrl, style, onLoadEnd) => (<Image source={{ uri: sourceUrl }} style={style} onLoadEnd={onLoadEnd}/>);
/**
 * Render image with skeleton component
 * @param {string} sourceUrl - URL of the image
 * @param {ImageStyle} style - Style for the image
 * @returns {React.ReactElement} React.ReactElement
 */
const ImageWithSkeleton = ({ sourceUrl, style }) => {
    const [isLoading, setIsLoading] = useState(true);
    const opacityAnim = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        let animation = null;
        if (isLoading) {
            animation = Animated.loop(Animated.sequence([
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
            ]));
            animation.start();
        }
        return () => {
            if (animation) {
                animation.stop();
            }
        };
    }, [isLoading, opacityAnim]);
    return (<View style={[styles.container, style]}>
      {_renderLoadingImage(isLoading, opacityAnim)}
      {_renderImage(sourceUrl, styles.image, () => setIsLoading(false))}
    </View>);
};
export default React.memo(ImageWithSkeleton);
