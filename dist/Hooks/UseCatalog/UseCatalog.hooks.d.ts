import type { UseCatalogInfiniteOptions, UseCatalogInfiniteResult } from './UseCatalog.hooks.types';
import type { FetchCatalogParams } from '../../Service/Service.types';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
export declare const catalogKeys: {
    all: readonly ["catalog"];
    lists: () => readonly ["catalog", "list"];
    list: (params?: FetchCatalogParams) => readonly ["catalog", "list", FetchCatalogParams];
    details: () => readonly ["catalog", "detail"];
    detail: (id: string) => readonly ["catalog", "detail", string];
};
export declare const useCatalogProductInfinite: (navigation: NativeStackNavigationProp<ParamListBase>, params?: FetchCatalogParams, options?: UseCatalogInfiniteOptions) => UseCatalogInfiniteResult;
export default useCatalogProductInfinite;
//# sourceMappingURL=UseCatalog.hooks.d.ts.map