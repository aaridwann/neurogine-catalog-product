import { ComponentType } from "react";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { CatalogProductFeatureParamList } from "../Types";
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