import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
export interface CatalogProductFeatureParamList extends Record<string, object | undefined> {
    CatalogProductScreen: {
        title?: string;
    } | undefined;
}
export type CatalogProductScreenProps = NativeStackScreenProps<CatalogProductFeatureParamList, 'CatalogProductScreen'>;
export type VoidFunction = () => void;
export type Navigation = NativeStackNavigationProp<ParamListBase>;
//# sourceMappingURL=index.d.ts.map