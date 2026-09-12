import type { Animated } from 'react-native';
import type { SuggestionItem } from '../InputComponent/Input.component.types';
export type DefaultOpacity = Animated.Interpolation<number | string>;
export interface PropsRenderSearchSection {
    isSearchActive: boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    toggleSearch: (active: boolean) => void;
    searchOpacity: Animated.AnimatedInterpolation<number | string>;
    sampleSuggestions: SuggestionItem[];
    isLoading: boolean;
    onSelectSuggestion: (item: SuggestionItem) => void;
}
//# sourceMappingURL=TopHeader.component.types.d.ts.map