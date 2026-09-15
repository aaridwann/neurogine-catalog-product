import { useCallback, useRef, useState } from 'react';
import { Animated, Keyboard } from 'react-native';
import get from 'lodash/get';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useSearchStore from '../../Store/Search';
import useProductSearch from '../UseProductSearch';
/**
 * Callback function to toggle search mode
 * @param {boolean} active - Whether search mode is active
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setActive - Callback to set search mode
 * @param {Animated.Value} animValue - Animated value for search mode
 */
const onToggleSearch = (active, setActive, animValue) => {
    if (!active)
        Keyboard.dismiss();
    setActive(active);
    Animated.timing(animValue, {
        duration: 250,
        toValue: active ? 1 : 0,
        useNativeDriver: false,
    }).start();
};
/**
 * Default opacity for header
 * @param animValue - Animated value for search mode
 * @returns {Animated.AnimatedInterpolation<number>} Animated opacity for header
 */
const _defaultOpacity = (animValue) => animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
});
/**
 * Search opacity for header
 * @param animValue - Animated value for search mode
 * @returns {Animated.AnimatedInterpolation<number>} Animated opacity for search input
 */
const _searchOpacity = (animValue) => animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
});
const useHeader = (props) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const { data, isFetching } = useProductSearch();
    const insets = useSafeAreaInsets();
    const { query, setQuery } = useSearchStore((state) => state);
    const animValue = useRef(new Animated.Value(0)).current;
    const defaultOpacity = _defaultOpacity(animValue);
    const searchOpacity = _searchOpacity(animValue);
    const sampleSuggestions = get(data, 'sampleSuggestions', []);
    const isLoadingSuggestions = Boolean(isFetching && !sampleSuggestions.length);
    const toggleSearch = useCallback((active) => {
        onToggleSearch(active, setIsSearchActive, animValue);
    }, [animValue]);
    const onSelectSuggestion = useCallback((item) => {
        setQuery(item.title);
        toggleSearch(false);
        // Todo need change route name to from constants shared file
        props.navigation.navigate('DetailScreen', { id: item.id });
    }, [toggleSearch, props.navigation, setQuery]);
    return {
        isSearchActive,
        insets,
        query,
        defaultOpacity,
        searchOpacity,
        isLoadingSuggestions,
        onSelectSuggestion,
        toggleSearch,
        setQuery,
        data,
        isFetching,
    };
};
export default useHeader;
