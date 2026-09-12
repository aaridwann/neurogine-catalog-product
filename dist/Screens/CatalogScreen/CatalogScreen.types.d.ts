import type { FlatListProps } from 'react-native';
import type { CatalogItem } from '../../Service/Service.types';
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
    onSelectedProduct: (id: string) => void;
}
export type GetFlatListProductsProps = (params: Partial<CatalogProductScreenComponentProps>) => FlatListProps<CatalogItem>;
//# sourceMappingURL=CatalogScreen.types.d.ts.map