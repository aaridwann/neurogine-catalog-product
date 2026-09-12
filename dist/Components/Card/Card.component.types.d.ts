import type { CatalogItem } from '../../Service/CatalogProduct.service.types';
export type VoidFunctionComponent = () => void;
export interface CardComponentProps {
    data: CatalogItem;
    onFavoritePress: VoidFunctionComponent;
    onAddToCartPress: VoidFunctionComponent;
    onCardPress: VoidFunctionComponent;
}
//# sourceMappingURL=Card.component.types.d.ts.map