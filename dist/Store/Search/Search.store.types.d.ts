import type { CatalogItem } from '../../Service/Service.types';
import type { VoidFunction } from '../../Types';
export interface SearchState {
    query: string;
    setQuery: (query: string) => void;
    resetQuery: VoidFunction;
    resultData: CatalogItem[];
    setResultData: (resultData: CatalogItem[]) => void;
}
//# sourceMappingURL=Search.store.types.d.ts.map