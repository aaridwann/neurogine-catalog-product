import type { ComponentType } from 'react';
import type { CatalogProductFeatureParamList } from '../Types';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack';
/**
 * Configuration for a screen in the catalog product feature
 * @template T - Type of the screen name
 * @param {T} name - Name of the screen
 * @param {} component - Component of the screen
 * @param {NativeStackNavigationOptions} [options] - Options of the screen
 */
export interface ScreenConfig<T extends keyof CatalogProductFeatureParamList> {
    name: T;
    component: ComponentType<NativeStackScreenProps<ParamListBase, string>>;
    options?: NativeStackNavigationOptions;
}
//# sourceMappingURL=ScreemConfigs.types.d.ts.map