import React from 'react';

import {
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import { noop } from 'lodash';

import GeneralText, { Constants } from '@Neurogine/ui-kit-general-text';

import styles from './TopHeader.component.styles';
import useHeader from '../../Hooks/UseHeader';
import { HeaderCartButton } from '../HeaderCart/HeaderCard.component';
import InputComponent from '../InputComponent';

import type { DefaultOpacity, PropsRenderSearchSection } from './TopHeader.component.types';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

const { VARIANT } = Constants;

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

/**
 * Renders animated search input container with cancel action
 * @returns {React.ReactElement} Search input section
 */
const _renderSearchSection = ({
  isSearchActive, searchQuery, setSearchQuery,
  toggleSearch, searchOpacity, sampleSuggestions, isLoading,
  onSelectSuggestion,
}: PropsRenderSearchSection): React.ReactElement => (
  <Animated.View
    pointerEvents={isSearchActive ? 'auto' : 'none'}
    style={[
      styles.searchContainer,
      { opacity: searchOpacity },
    ]}
  >
    <InputComponent
      onSelectSuggestion={onSelectSuggestion}
      isLoading={isLoading}
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
 * Custom Header component integrating safe area insets, search bar, and backdrop dismiss
 * @param {_props} _props Navigation header properties
 * @returns {React.ReactElement} Custom header layout
 */
export const CustomHeader = (_props: NativeStackHeaderProps): React.ReactElement => {
  const {
    isSearchActive,
    insets,
    defaultOpacity,
    toggleSearch,
    onSelectSuggestion,
    query,
    searchOpacity,
    setQuery,
    data,
    isFetching,
  } = useHeader(_props);

  return (
    <React.Fragment>
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <View style={styles.contentWrapper}>
          {!isSearchActive && _renderUserSection({ defaultOpacity })}
          {!isSearchActive && _renderSearchTrigger({ defaultOpacity, toggleSearch })}
          {isSearchActive && _renderSearchSection({
            onSelectSuggestion,
            isSearchActive,
            searchQuery: query,
            setSearchQuery: setQuery,
            toggleSearch,
            searchOpacity,
            sampleSuggestions: data,
            isLoading: isFetching,
          })}
        </View>
      </View>
      {_renderBackdrop(isSearchActive, setQuery, toggleSearch)}
    </React.Fragment>
  );
};

export default React.memo(CustomHeader);