import { useCallback, useRef, useState } from 'react';

import { Animated, Keyboard } from 'react-native';

import get from 'lodash/get';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useSearchStore from '../../Store/Search';
import useProductSearch from '../UseProductSearch';

import type { UseHeaderReturn } from './UseHeader.hooks.types';
import type { CatalogItem } from '../../Service/Service.types';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

/**
 * Callback function to toggle search mode
 * @param {boolean} active - Whether search mode is active
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setActive - Callback to set search mode
 * @param {Animated.Value} animValue - Animated value for search mode
 */
const onToggleSearch = (
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  animValue: Animated.Value,
): void => {
  if (!active) Keyboard.dismiss();

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
const _defaultOpacity = (animValue: Animated.Value): Animated.AnimatedInterpolation<number> =>
  animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

/**
 * Search opacity for header
 * @param animValue - Animated value for search mode
 * @returns {Animated.AnimatedInterpolation<number>} Animated opacity for search input
 */
const _searchOpacity = (animValue: Animated.Value): Animated.AnimatedInterpolation<number> =>
  animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

const useHeader = (props: NativeStackHeaderProps): UseHeaderReturn => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const { data, isFetching } = useProductSearch();
  const insets = useSafeAreaInsets();
  const { query, setQuery } = useSearchStore((state) => state);
  const animValue = useRef(new Animated.Value(0)).current;
  const defaultOpacity = _defaultOpacity(animValue);
  const searchOpacity = _searchOpacity(animValue);
  const sampleSuggestions = get(data, 'sampleSuggestions', []);
  const isLoadingSuggestions = Boolean(isFetching && !sampleSuggestions.length);

  const toggleSearch = useCallback((active: boolean) => {
    onToggleSearch(active, setIsSearchActive, animValue);
  }, [animValue]);

  const onSelectSuggestion = useCallback((item: CatalogItem) => {
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