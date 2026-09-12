import type { Animated, NativeSyntheticEvent, StyleProp, TargetedEvent, TextInputProps, ViewStyle } from 'react-native';

import type { CatalogItem } from '../../Service/Service.types';
import type { VoidFunction } from '../../Types';
import type { IoniconsIconName } from '@react-native-vector-icons/ionicons';

export type SuggestionItem = CatalogItem

export interface InputComponentProps extends Omit<TextInputProps, 'style'> {
  label: string;
  error?: string;
  iconName?: IoniconsIconName;
  disabled?: boolean;
  suggestions?: SuggestionItem[];
  containerStyle?: StyleProp<ViewStyle>;
  onClear?: () => void;
  onSelectSuggestion?: (item: SuggestionItem) => void;
  isLoading?: boolean
}

export interface PropsLoadingIcon {
  isLoading: boolean;
  iconName: IoniconsIconName;
  isFocused: boolean;
  activeColor: string;
  inactiveColor: string;
}

export type PassThroughTextInputProps = Omit<
  InputComponentProps,
  | 'label'
  | 'error'
  | 'iconName'
  | 'suggestions'
  | 'containerStyle'
  | 'onClear'
  | 'onSelectSuggestion'
  | 'disabled'
  | 'secureTextEntry'
  | 'value'
  | 'onBlur'
  | 'onChangeText'
  | 'onFocus'
>;

export interface PropsRenderTextInput extends PassThroughTextInputProps {
  disabled: boolean;
  secureTextEntry: boolean;
  isPasswordVisible: boolean;
  value: string;
  handleBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onChangeText?: (text: string) => void;
  handleFocus: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}

export interface PropsRenderSuggestionItem {
  item: SuggestionItem;
  onSelectSuggestion: (item: SuggestionItem) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RenderActionButtonProps {
  onClear?: VoidFunction;
  value: string;
  disabled: boolean;
  secureTextEntry: boolean;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RenderSuggestionListProps {
  showSuggestions: boolean;
  visibleSuggestions: SuggestionItem[];
  onSelectSuggestion: (item: SuggestionItem) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HooksInputReturnType {
  activeColor: string;
  animatedValue: Animated.Value;
  handleBlur: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  handleFocus: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  inactiveColor: string;
  isFocused: boolean;
  isPasswordVisible: boolean;
  labelStyle: Record<string, Animated.AnimatedInterpolation<number | string>>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showSuggestions: boolean;
  visibleSuggestions: SuggestionItem[];
}

export interface RenderContentProps {
  hooks: HooksInputReturnType;
  borderColor: Animated.AnimatedInterpolation<string>;
  restProps: Partial<InputComponentProps>;
  label: string;
  iconName: IoniconsIconName;
  value: string;
  disabled: boolean;
  secureTextEntry: boolean;
  onClear: () => void;
  onChangeText: (text: string) => void;
  setIsPasswordVisible: (value: boolean) => void;
  isLoading: boolean
}

export type RenderContent = (props: RenderContentProps) => React.ReactNode;
