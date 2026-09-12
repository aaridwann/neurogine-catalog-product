import type { CatalogItem } from '../../Service/CatalogProduct.service.types';
import type { CatalogProductScreenProps } from '../../Types';
export interface CatalogProductScreenComponentProps {
    route: CatalogProductScreenProps['route'];
    title?: string;
    onGoBack: () => void;
    products: CatalogItem[];
    fetchNextPage: () => void;
    isLoading: boolean;
    hasNextPage: boolean;
    error: Error | null;
}
//# sourceMappingURL=CatalogScreen.types.d.ts.map