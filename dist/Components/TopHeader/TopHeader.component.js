import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Animated, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { noop } from 'lodash';
import GeneralText, { Constants } from '@Neurogine/ui-kit-general-text';
import styles from './TopHeader.component.styles';
import useHeader from '../../Hooks/UseHeader';
import { HeaderCartButton } from '../HeaderCart/HeaderCard.component';
import InputComponent from '../InputComponent';
const { VARIANT } = Constants;
/**
 * Renders the shopping cart button with counter
 * @returns {React.ReactElement} HeaderCartButton element
 */
const _renderHeaderCartButton = () => (_jsx(HeaderCartButton, { itemCount: 13, onPress: noop }));
/**
 * Renders user greeting label alongside cart badge
 * @returns {React.ReactElement} Greeting section row
 */
const _renderUserGreeting = () => (_jsxs(View, { style: styles.greetingRow, children: [_jsx(GeneralText, { variant: VARIANT.LABEL3, children: "Welcome back" }), _renderHeaderCartButton()] }));
/**
* Renders user identity section
* @returns {React.ReactElement} User section block
*/
const _renderUserSection = ({ defaultOpacity }) => (_jsxs(Animated.View, { style: [styles.userSection, { opacity: defaultOpacity }], children: [_renderUserGreeting(), _jsx(GeneralText, { variant: VARIANT.HEADLINE3, children: "Neurogine" })] }));
/**
* Renders trigger button to open search mode
* @returns {React.ReactElement} Search icon button
*/
const _renderSearchTrigger = ({ defaultOpacity, toggleSearch }) => (_jsx(Animated.View, { style: [styles.actionSection, { opacity: defaultOpacity }], children: _jsx(TouchableOpacity, { activeOpacity: 0.7, onPress: () => {
            toggleSearch(true);
        }, children: _jsx(Ionicons, { color: "#000000", name: "search", size: 24 }) }) }));
/**
 * Renders dismiss backdrop overlay when search mode is active
 * @returns {React.ReactNode} Backdrop touch listener
 */
const _renderBackdrop = (isSearchActive, setSearchQuery, toggleSearch) => {
    if (!isSearchActive)
        return null;
    return (_jsx(TouchableWithoutFeedback, { onPress: () => {
            setSearchQuery('');
            toggleSearch(false);
        }, children: _jsx(View, { style: styles.backdrop }) }));
};
/**
 * Renders animated search input container with cancel action
 * @returns {React.ReactElement} Search input section
 */
const _renderSearchSection = ({ isSearchActive, searchQuery, setSearchQuery, toggleSearch, searchOpacity, sampleSuggestions, isLoading, onSelectSuggestion, }) => (_jsxs(Animated.View, { pointerEvents: isSearchActive ? 'auto' : 'none', style: [
        styles.searchContainer,
        { opacity: searchOpacity },
    ], children: [_jsx(InputComponent, { onSelectSuggestion: onSelectSuggestion, isLoading: isLoading, iconName: "search", suggestions: sampleSuggestions, autoFocus: isSearchActive, containerStyle: styles.searchInput, label: "Find Product...", value: searchQuery, onChangeText: setSearchQuery, onClear: () => setSearchQuery('') }), _jsx(TouchableOpacity, { activeOpacity: 0.7, style: styles.closeButton, onPress: () => {
                setSearchQuery('');
                toggleSearch(false);
            }, children: _jsx(Ionicons, { color: "#000000", name: "close", size: 24 }) })] }));
/**
 * Custom Header component integrating safe area insets, search bar, and backdrop dismiss
 * @param {_props} _props Navigation header properties
 * @returns {React.ReactElement} Custom header layout
 */
export const CustomHeader = (_props) => {
    const { isSearchActive, insets, defaultOpacity, toggleSearch, onSelectSuggestion, query, searchOpacity, setQuery, data, isFetching, } = useHeader(_props);
    return (_jsxs(React.Fragment, { children: [_jsx(View, { style: [styles.headerContainer, { paddingTop: insets.top }], children: _jsxs(View, { style: styles.contentWrapper, children: [!isSearchActive && _renderUserSection({ defaultOpacity }), !isSearchActive && _renderSearchTrigger({ defaultOpacity, toggleSearch }), isSearchActive && _renderSearchSection({
                            onSelectSuggestion,
                            isSearchActive,
                            searchQuery: query,
                            setSearchQuery: setQuery,
                            toggleSearch,
                            searchOpacity,
                            sampleSuggestions: data,
                            isLoading: isFetching,
                        })] }) }), _renderBackdrop(isSearchActive, setQuery, toggleSearch)] }));
};
export default React.memo(CustomHeader);
