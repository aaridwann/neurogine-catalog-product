import { createAction } from "@reduxjs/toolkit";

/**
 * Type for action to set data detail product
 */
const SET_DATA_DETAIL_PRODUCT = "SET_DATA_DETAIL_PRODUCT";

/**
 * Type for action to get data detail product request
 */
const GET_DETAIL_PRODUCT_REQUEST = "GET_DETAIL_PRODUCT_REQUEST";

/**
 * Type for action to get data detail product failed
 */
const GET_DETAIL_PRODUCT_FAILED = "GET_DETAIL_PRODUCT_FAILED";

/**
 * Type for action to get data detail product success
 */
const GET_DETAIL_PRODUCT_SUCCESS = "GET_DETAIL_PRODUCT_SUCCESS";

/**
 * Constants for action types
 */
const constants = {
  SET_DATA_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_FAILED,
  GET_DETAIL_PRODUCT_SUCCESS,
};

/**
 * Action to set data detail product
 * @returns {object} Action to set data detail product
 */
const setDataDetailProduct = createAction(constants.SET_DATA_DETAIL_PRODUCT);

/**
 * Action to get data detail product request
 * @returns {object} Action to get data detail product request
 */
const getDetailProductRequest = createAction(constants.GET_DETAIL_PRODUCT_REQUEST);

/**
 * Action to get data detail product failed
 * @returns {object} Action to get data detail product failed
 */
const getDetailProductFailed = createAction(constants.GET_DETAIL_PRODUCT_FAILED);

/**
 * Action to get data detail product success
 * @returns {object} Action to get data detail product success
 */
const getDetailProductSuccess = createAction(constants.GET_DETAIL_PRODUCT_SUCCESS);

/**
 * Actions for detail product
 * @returns {object} Actions for detail product
 */
const actions = {
  setDataDetailProduct,
  getDetailProductRequest,
  getDetailProductFailed,
  getDetailProductSuccess,
};

export { constants, actions };
