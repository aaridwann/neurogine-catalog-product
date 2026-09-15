/**
 * Constants for action types
 */
declare const constants: {
    SET_DATA_CATALOG_PRODUCT: string;
    GET_CATALOG_PRODUCT_REQUEST: string;
    GET_CATALOG_PRODUCT_FAILED: string;
    GET_CATALOG_PRODUCT_SUCCESS: string;
};
/**
 * Actions for detail product
 * @returns {object} Actions for detail product
 */
declare const actions: {
    setDataCatalogProduct: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    getCatalogProductRequest: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    getCatalogProductFailed: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
    getCatalogProductSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
};
export { constants, actions };
//# sourceMappingURL=Action.d.ts.map