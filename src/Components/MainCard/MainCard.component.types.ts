import type { StyleProp, ViewStyle } from 'react-native';

export interface MainCardProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  buttonText?: string;
  imageUrl?: string;
  onPress?: () => void;
  isLoading?: boolean
}

export interface ShimmerItemProps {
  style: StyleProp<ViewStyle>;
}