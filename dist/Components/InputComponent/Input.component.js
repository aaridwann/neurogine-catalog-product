import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import GeneralText, { Constants } from '@Neurogine/ui-kit-general-text';
import styles from './Input.component.styles';
const { VARIANT } = Constants;
/**
 * Renders prefix leading icon if specified
 * @returns {React.ReactNode} Prefix icon view or null
 */
const _renderLeadingIcon = ({ iconName = 'search-outline', isFocused, activeColor, inactiveColor, isLoading, }) => {
    if (!iconName)
        return null;
    return (<View style={styles.leadingIcon}>
      <Ionicons color={isFocused ? activeColor : inactiveColor} name={isLoading ? 'refresh' : iconName} size={20}/>
    </View>);
};
/**
 * Render label component
 * @param label Input label text
 * @param labelStyle Input label style
 * @returns Label component
 */
const _renderLabel = (label, labelStyle) => (<Animated.Text style={[styles.label, labelStyle]}>
    {label}
  </Animated.Text>);
/**
 * Renders the core TextInput element
 * @param {PropsRenderTextInput} props Helper props
 * @returns {React.ReactElement} TextInput node
 */
const _renderTextInput = ({ disabled, secureTextEntry, isPasswordVisible, value, handleBlur, onChangeText, handleFocus, ...restProps }) => (<TextInput editable={!disabled} secureTextEntry={secureTextEntry && !isPasswordVisible} style={[styles.input, disabled && styles.disabledInput]} value={value} onBlur={handleBlur} onChangeText={onChangeText} onFocus={handleFocus} {...restProps}/>);
/**
 * Renders action buttons like clear text and password toggle
 * @returns {React.ReactNode} Action buttons row
 */
const _renderActionButtons = ({ onClear, value, disabled, secureTextEntry, isPasswordVisible, setIsPasswordVisible, }) => (<View style={styles.actionContainer}>
    {Boolean(onClear) && Boolean(value) && !disabled && (<TouchableOpacity activeOpacity={0.6} style={styles.actionButton} onPress={onClear}>
        <Ionicons color="#8E8E93" name="close-circle" size={18}/>
      </TouchableOpacity>)}

    {secureTextEntry && (<TouchableOpacity activeOpacity={0.6} style={styles.actionButton} onPress={() => {
            setIsPasswordVisible((prev) => !prev);
        }}>
        <Ionicons color="#8E8E93" name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={18}/>
      </TouchableOpacity>)}
  </View>);
/**
 * Renders single suggestion item row
 * @param {SuggestionItem} item Suggestion data object
 * @returns {React.ReactElement} Touchable item row
 */
const _renderSuggestionItem = ({ item, onSelectSuggestion, setIsFocused, }) => (<TouchableOpacity key={item.id} activeOpacity={0.7} style={styles.suggestionItem} onPress={() => {
        onSelectSuggestion?.(item);
        setIsFocused(false);
    }}>
    <Image source={{ uri: item.thumbnail }} style={styles.imageThumbnailSuggestion}/>
    <View style={styles.suggestionTextContainer}>
      <GeneralText variant={VARIANT.BODY1}>{item.title}</GeneralText>
      {Boolean(item.title) && (<GeneralText variant={VARIANT.LABEL3}>{item.category}</GeneralText>)}
    </View>
    <Ionicons color="#C7C7CC" name="arrow-forward-outline" size={14}/>
  </TouchableOpacity>);
/**
 * Renders suggestion list container under input
 * @returns {React.ReactNode} Suggestion list component or null
 */
const _renderSuggestionList = ({ showSuggestions, visibleSuggestions, onSelectSuggestion, setIsFocused, }) => {
    if (!showSuggestions)
        return null;
    return (<View style={styles.suggestionDropdown}>
      {visibleSuggestions.map((item) => _renderSuggestionItem({ item, onSelectSuggestion, setIsFocused }))}
    </View>);
};
/**
 * Render error text if error is provided
 * @param {string} error Error message
 * @returns {React.ReactNode} Error text component or null
 */
const _renderErrorText = (error) => {
    if (error)
        return <Text style={styles.errorText}>{error}</Text>;
    return null;
};
const _labelStyle = (animatedValue, activeColor, inactiveColor) => ({
    color: animatedValue?.interpolate({
        inputRange: [0, 1],
        outputRange: [inactiveColor, activeColor],
    }),
    fontSize: animatedValue?.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 11],
    }),
    top: animatedValue?.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 5],
    }),
});
/**
 * Hook to handle input logic
 * @param {InputComponentProps} param0 - Input component props
 * @returns {HooksInputReturnType} Hook return type
 */
const useInput = ({ value = '', secureTextEntry = false, error, onFocus, onBlur, suggestions = [], }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
    const visibleSuggestions = suggestions.slice(0, 5);
    const showSuggestions = isFocused && visibleSuggestions.length > 0;
    useEffect(() => {
        Animated.timing(animatedValue, {
            duration: 200,
            toValue: isFocused || value.length > 0 ? 1 : 0,
            useNativeDriver: false,
        }).start();
    }, [animatedValue, isFocused, value]);
    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus?.(e);
    };
    const handleBlur = (e) => {
        setTimeout(() => setIsFocused(false), 150);
        onBlur?.(e);
    };
    const activeColor = error ? '#FF3B30' : '#000000';
    const inactiveColor = '#8E8E93';
    const labelStyle = _labelStyle(animatedValue, activeColor, inactiveColor);
    return {
        isFocused, setIsFocused, isPasswordVisible, setIsPasswordVisible, animatedValue, handleFocus,
        handleBlur, labelStyle, activeColor, inactiveColor, showSuggestions, visibleSuggestions,
    };
};
const _renderContent = ({ hooks, borderColor, restProps, label, iconName, value, disabled, secureTextEntry, onClear, onChangeText, isLoading, }) => (<Animated.View style={[styles.container, { borderColor }, disabled && styles.disabledContainer]}>
    {_renderLeadingIcon({
        isLoading,
        iconName,
        activeColor: hooks.activeColor,
        inactiveColor: hooks.inactiveColor, isFocused: hooks.isFocused
    })}
    <View style={styles.inputFieldWrapper}>
      {_renderLabel(label, hooks.labelStyle)}
      {_renderTextInput({
        disabled, secureTextEntry, isPasswordVisible: hooks.isPasswordVisible,
        value, handleBlur: hooks.handleBlur, onChangeText,
        handleFocus: hooks.handleFocus, ...restProps
    })}
    </View>
    {_renderActionButtons({ onClear, value, disabled, secureTextEntry,
        isPasswordVisible: hooks.isPasswordVisible,
        setIsPasswordVisible: hooks.setIsPasswordVisible })}
  </Animated.View>);
/**
 * Modern Minimalist Input Component with Suggestion Dropdown
 * @param {InputComponentProps} props Input properties
 * @returns {React.ReactElement} Styled Input with suggestion layout
 */
const InputComponent = ({ label, value = '', error, disabled = false, secureTextEntry = false, iconName, suggestions = [], containerStyle, onClear, onFocus, onBlur, onChangeText, onSelectSuggestion, isLoading, ...restProps }) => {
    const hooks = useInput({ ...restProps, value, secureTextEntry,
        label, error, onFocus, onBlur, suggestions });
    const borderColor = hooks.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [error ? '#FF3B30' : '#E5E5EA', hooks.activeColor],
    });
    return (<View style={[styles.wrapper, containerStyle]}>
      {_renderContent({ isLoading, hooks, borderColor, label, iconName,
            value, disabled, secureTextEntry, onClear, onChangeText,
            setIsPasswordVisible: hooks.setIsPasswordVisible, restProps,
        })}
      {_renderSuggestionList({
            showSuggestions: hooks.showSuggestions,
            visibleSuggestions: hooks.visibleSuggestions,
            onSelectSuggestion,
            setIsFocused: hooks.setIsFocused,
        })}
      {_renderErrorText(error)}
    </View>);
};
export default InputComponent;
