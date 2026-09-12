import { CatalogProductScreenProps } from '../../Types';

export interface CatalogProductScreenComponentProps {
  route: CatalogProductScreenProps['route'];
  title?: string;
  onGoBack: () => void;
}