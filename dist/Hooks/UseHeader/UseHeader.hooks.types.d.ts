import type { Animated } from 'react-native';
import type { CatalogItem } from '../../Service/Service.types';
import type { EdgeInsets } from 'react-native-safe-area-context';
export interface UseHeaderReturn {
    isSearchActive: boolean;
    insets: EdgeInsets;
    query: string;
    defaultOpacity: Animated.AnimatedInterpolation<number>;
    searchOpacity: Animated.AnimatedInterpolation<number>;
    isLoadingSuggestions: boolean;
    onSelectSuggestion: (item: CatalogItem) => void;
    toggleSearch: (active: boolean) => void;
    setQuery: (query: string) => void;
    data: CatalogItem[];
    isFetching: boolean;
}
//# sourceMappingURL=UseHeader.hooks.types.d.ts.map