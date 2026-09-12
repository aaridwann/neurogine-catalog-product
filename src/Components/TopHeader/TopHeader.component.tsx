import React, { useRef, useState } from 'react';

import {
  Animated,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import { noop } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GeneralText from '@Neurogine/ui-kit-general-text';
import { VARIANT } from '@Neurogine/ui-kit-general-text/dist/Constants';

import { HeaderCartButton } from '../HeaderCart/HeaderCard.component';
import InputComponent from '../InputComponent';
import styles from './TopHeader.component.styles';

import type { DefaultOpacity } from './TopHeader.component.types';
import type { SuggestionItem } from '../InputComponent/Input.component.types';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

/**
 * Renders the shopping cart button with counter
 * @returns {React.ReactElement} HeaderCartButton element
 */
const _renderHeaderCartButton = (): React.ReactElement => (
  <HeaderCartButton itemCount={13} onPress={noop} />
);

/**
 * Renders user greeting label alongside cart badge
 * @returns {React.ReactElement} Greeting section row
 */
const _renderUserGreeting = (): React.ReactElement => (
  <View style={styles.greetingRow}>
    <GeneralText variant={VARIANT.LABEL3}>
      Welcome back
    </GeneralText>

    {_renderHeaderCartButton()}
  </View>
);

/**
* Renders user identity section
* @returns {React.ReactElement} User section block
*/
const _renderUserSection = (
  { defaultOpacity }:{ defaultOpacity: DefaultOpacity },
): React.ReactElement => (
  <Animated.View style={[styles.userSection, { opacity: defaultOpacity }]}>
    {_renderUserGreeting()}
    <GeneralText variant={VARIANT.HEADLINE3}>
        Neurogine
    </GeneralText>
  </Animated.View>
);

/**
* Renders trigger button to open search mode
* @returns {React.ReactElement} Search icon button
*/
const _renderSearchTrigger = (
  { defaultOpacity, toggleSearch }:
  { defaultOpacity: DefaultOpacity, toggleSearch: (active: boolean) => void },
): React.ReactElement => (
  <Animated.View style={[styles.actionSection, { opacity: defaultOpacity }]}>
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        toggleSearch(true);
      }}
    >
      <Ionicons color="#000000" name="search" size={24} />
    </TouchableOpacity>
  </Animated.View>
);

/**
 * Renders dismiss backdrop overlay when search mode is active
 * @returns {React.ReactNode} Backdrop touch listener
 */
const _renderBackdrop = (
  isSearchActive: boolean,
  setSearchQuery: (query: string) => void,
  toggleSearch: (active: boolean) => void,
): React.ReactNode => {
  if (!isSearchActive) return null;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSearchQuery('');
        toggleSearch(false);
      }}
    >
      <View style={styles.backdrop} />
    </TouchableWithoutFeedback>
  );
};

interface PropsRenderSearchSection {
  isSearchActive: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSearch: (active: boolean) => void;
  searchOpacity: Animated.AnimatedInterpolation<number | string>;
  sampleSuggestions: SuggestionItem[];
}

/**
 * Renders animated search input container with cancel action
 * @returns {React.ReactElement} Search input section
 */
const _renderSearchSection = ({
  isSearchActive, searchQuery, setSearchQuery,
  toggleSearch, searchOpacity, sampleSuggestions,
}: PropsRenderSearchSection): React.ReactElement => (
  <Animated.View
    pointerEvents={isSearchActive ? 'auto' : 'none'}
    style={[
      styles.searchContainer,
      { opacity: searchOpacity },
    ]}
  >
    <InputComponent
      iconName="search"
      suggestions={sampleSuggestions}
      autoFocus={isSearchActive}
      containerStyle={styles.searchInput}
      label="Find Product..."
      value={searchQuery}
      onChangeText={setSearchQuery}
      onClear={() => setSearchQuery('')}
    />
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.closeButton}
      onPress={() => {
        setSearchQuery('');
        toggleSearch(false);
      }}
    >
      <Ionicons color="#000000" name="close" size={24} />
    </TouchableOpacity>
  </Animated.View>
);

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

/**
 * Sample suggestions for search input
 * @returns {SuggestionItem[]} Sample suggestions
 */
const _sampleSuggestions = [
  { id: '1', label: 'Sepatu Running Nike', subtitle: 'Kategori Sepatu' },
  { id: '2', label: 'Sepatu Sneaker Casual', subtitle: 'Kategori Sepatu' },
  { id: '3', label: 'Sepatu Futsal Adidas', subtitle: 'Kategori Olahraga' },
];

/**
 * Custom Header component integrating safe area insets, search bar, and backdrop dismiss
 * @param {_props} _props Navigation header properties
 * @returns {React.ReactElement} Custom header layout
 */
export const CustomHeader = (_props: NativeStackHeaderProps): React.ReactElement => {
  const insets = useSafeAreaInsets();
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const animValue = useRef(new Animated.Value(0)).current;

  const toggleSearch = React.useCallback((active: boolean) => {
    onToggleSearch(active, setIsSearchActive, animValue);
  }, []);

  const defaultOpacity = _defaultOpacity(animValue);
  const searchOpacity = _searchOpacity(animValue);

  return (
    <>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.contentWrapper}>
          {!isSearchActive && _renderUserSection({ defaultOpacity })}
          {!isSearchActive && _renderSearchTrigger({ defaultOpacity, toggleSearch })}
          {isSearchActive && _renderSearchSection({
            isSearchActive,
            searchQuery,
            setSearchQuery,
            toggleSearch,
            searchOpacity,
            sampleSuggestions: _sampleSuggestions,
          })}
        </View>
      </View>

      {_renderBackdrop(isSearchActive, setSearchQuery, toggleSearch)}
    </>
  );
};

export default React.memo(CustomHeader);