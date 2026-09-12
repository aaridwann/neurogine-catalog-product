import { createAction } from '@reduxjs/toolkit';
/**
 * Type for action to set data detail product
 */
const SET_DATA_CATALOG_PRODUCT = 'SET_DATA_CATALOG_PRODUCT';
/**
 * Type for action to get data detail product request
 */
const GET_CATALOG_PRODUCT_REQUEST = 'GET_CATALOG_PRODUCT_REQUEST';
/**
 * Type for action to get data detail product failed
 */
const GET_CATALOG_PRODUCT_FAILED = 'GET_CATALOG_PRODUCT_FAILED';
/**
 * Type for action to get data detail product success
 */
const GET_CATALOG_PRODUCT_SUCCESS = 'GET_CATALOG_PRODUCT_SUCCESS';
/**
 * Constants for action types
 */
const constants = {
    SET_DATA_CATALOG_PRODUCT,
    GET_CATALOG_PRODUCT_REQUEST,
    GET_CATALOG_PRODUCT_FAILED,
    GET_CATALOG_PRODUCT_SUCCESS,
};
/**
 * Action to set data detail product
 * @returns {object} Action to set data detail product
 */
const setDataCatalogProduct = createAction(constants.SET_DATA_CATALOG_PRODUCT);
/**
 * Action to get data detail product request
 * @returns {object} Action to get data detail product request
 */
const getCatalogProductRequest = createAction(constants.GET_CATALOG_PRODUCT_REQUEST);
/**
 * Action to get data detail product failed
 * @returns {object} Action to get data detail product failed
 */
const getCatalogProductFailed = createAction(constants.GET_CATALOG_PRODUCT_FAILED);
/**
 * Action to get data detail product success
 * @returns {object} Action to get data detail product success
 */
const getCatalogProductSuccess = createAction(constants.GET_CATALOG_PRODUCT_SUCCESS);
/**
 * Actions for detail product
 * @returns {object} Actions for detail product
 */
const actions = {
    setDataCatalogProduct,
    getCatalogProductRequest,
    getCatalogProductFailed,
    getCatalogProductSuccess,
};
export { constants, actions };
