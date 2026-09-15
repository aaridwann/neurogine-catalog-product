import React from 'react';
import type { InputComponentProps, RenderActionButtonProps } from './Input.component.types';
/**
 * Renders action buttons like clear text and password toggle
 * @returns {React.ReactNode} Action buttons row
 */
export declare const _renderActionButtons: ({ onClear, value, disabled, secureTextEntry, isPasswordVisible, setIsPasswordVisible, }: RenderActionButtonProps) => React.ReactNode;
/**
 * Modern Minimalist Input Component with Suggestion Dropdown
 * @param {InputComponentProps} props Input properties
 * @returns {React.ReactElement} Styled Input with suggestion layout
 */
declare const InputComponent: ({ label, value, error, disabled, secureTextEntry, iconName, suggestions, containerStyle, onClear, onFocus, onBlur, onChangeText, onSelectSuggestion, isLoading, ...restProps }: InputComponentProps) => React.ReactElement;
export default InputComponent;
//# sourceMappingURL=Input.component.d.ts.map