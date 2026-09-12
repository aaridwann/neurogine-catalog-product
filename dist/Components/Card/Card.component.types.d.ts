import type { CatalogItem } from '../../Service/Service.types';
import type { MaskedViewComponent } from '@react-native-masked-view/masked-view';
export type VoidFunctionComponent = (id: string) => void;
export interface CardComponentProps {
    data: CatalogItem;
    onFavoritePress: VoidFunctionComponent;
    onAddToCartPress: VoidFunctionComponent;
    onCardPress: VoidFunctionComponent;
}
export type MaskedViewProps = React.ComponentProps<typeof MaskedViewComponent>;
//# sourceMappingURL=Card.component.types.d.ts.map