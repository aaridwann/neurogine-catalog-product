import type { CatalogItem } from '../../Service/CatalogProduct.service.types';
import type { MaskedViewComponent } from '@react-native-masked-view/masked-view';

export type VoidFunctionComponent = () => void;

export interface CardComponentProps {
  data: CatalogItem;
  onFavoritePress: VoidFunctionComponent;
  onAddToCartPress: VoidFunctionComponent;
  onCardPress: VoidFunctionComponent;
}
export type MaskedViewProps = React.ComponentProps<typeof MaskedViewComponent>;