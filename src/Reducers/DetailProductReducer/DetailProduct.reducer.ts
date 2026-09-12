import { DetailAction, DetailState } from './DetailProduct.reducer.types';
import { DetailActionConstants } from '../../Shared';

/**
 * Initial state
 */
const initialState: DetailState = {
    data: [],
    loading: false,
    error: null,
};

/**
 * Reducer for detail product
 * @param state - Initial state
 * @param action - Action to dispatch
 * @returns {DetailState} - Updated state
 */
export const detailProductReducer = (state = initialState, action: DetailAction): DetailState => {
    switch (action.type) {
        case DetailActionConstants.SET_DATA_DETAIL_PRODUCT:
            return {
                ...state,
                data: action.payload,
            };
        case DetailActionConstants.GET_DETAIL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DetailActionConstants.GET_DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case DetailActionConstants.GET_DETAIL_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
