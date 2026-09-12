import { CatalogActionConstants } from "../../Shared";
/**
 * Initial state
 */
const initialState = {
    data: [],
    loading: false,
    error: null,
};
/**
 * Reducer for detail product
 * @param state - Initial state
 * @param action - Action to dispatch
 * @returns {CatalogProductState} - Updated state
 */
export const catalogProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case CatalogActionConstants.SET_DATA_CATALOG_PRODUCT:
            return {
                ...state,
                data: action.payload,
            };
        case CatalogActionConstants.GET_CATALOG_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CatalogActionConstants.GET_CATALOG_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case CatalogActionConstants.GET_CATALOG_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
