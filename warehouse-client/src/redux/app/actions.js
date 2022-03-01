import {
  ADD_SHOP,
  ADD_SHOP_FAILED,
  ADD_SHOP_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_SHOP,
  DELETE_SHOP_SUCCESS,
  DELETE_SHOP_FAILED,
  RESET_MESSAGE,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  LOG_OUT,
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  SET_SEARCH_QUERY,
  ADD_LOG,
  ADD_LOG_SUCCESS,
  ADD_LOG_FAILED,
  GET_LOGS,
  GET_LOGS_FAILED,
  GET_LOGS_SUCCESS,
  RESET_ERROR_MESSAGE,
} from "./types";

export const addShop = (location) => ({ type: ADD_SHOP, payload: location });
export const addShopSuccess = (message) => ({ type: ADD_SHOP_SUCCESS, payload: message });
export const addShopFailed = (err) => ({ type: ADD_SHOP_FAILED, payload: err });

export const addProduct = (name, location) => ({ type: ADD_PRODUCT, payload: { name, location } });
export const addProductSuccess = (message) => ({ type: ADD_PRODUCT_SUCCESS, payload: message });
export const addProductFailed = (err) => ({ type: ADD_PRODUCT_FAILED, payload: err });

export const updateProduct = (name, quantity, location, searchQuery, oldQuantity) => ({
  type: UPDATE_PRODUCT,
  payload: { name, quantity, location, searchQuery, oldQuantity },
});
export const updateProductSuccess = (message) => ({ type: UPDATE_PRODUCT_SUCCESS, payload: message });
export const updateProductFailed = (err) => ({ type: UPDATE_PRODUCT_FAILED, payload: err });

export const deleteProduct = (name, location, searchQuery) => ({ type: DELETE_PRODUCT, payload: { name, location, searchQuery } });
export const deleteProductSuccess = (message) => ({ type: DELETE_PRODUCT_SUCCESS, payload: message });
export const deleteProductFailed = (err) => ({ type: DELETE_PRODUCT_FAILED, payload: err });

export const deleteShop = (location, searchQuery) => ({ type: DELETE_SHOP, payload: { location, searchQuery } });
export const deleteShopSuccess = (message) => ({ type: DELETE_SHOP_SUCCESS, payload: message });
export const deleteShopFailed = (err) => ({ type: DELETE_SHOP_FAILED, payload: err });

export const resetMessage = () => ({ type: RESET_MESSAGE });
export const resetErrorMessage = () => ({ type: RESET_ERROR_MESSAGE });

export const signIn = (email, password, token) => ({ type: SIGN_IN, payload: { email, password, token } });
export const signInSuccess = (message) => ({ type: SIGN_IN_SUCCESS, payload: message });
export const signInFailed = (err) => ({ type: SIGN_IN_FAILED, payload: err });
export const logout = () => ({ type: LOG_OUT });

export const search = (searchFor, query, location) => ({ type: SEARCH, payload: { searchFor, query, location } });
export const searchSuccess = (message) => ({ type: SEARCH_SUCCESS, payload: message });
export const searchFailed = (err) => ({ type: SEARCH_FAILED, payload: err });
export const setSearchQuery = (searchQuery) => ({ type: SET_SEARCH_QUERY, payload: searchQuery });

export const addLog = (location, message) => ({ type: ADD_LOG, payload: { location, message } });
export const addLogSuccess = (message) => ({ type: ADD_LOG_SUCCESS, payload: message });
export const addLogFailed = (err) => ({ type: ADD_LOG_FAILED, payload: err });

export const getLogs = () => ({ type: GET_LOGS });
export const getLogsSuccess = (message) => ({ type: GET_LOGS_SUCCESS, payload: message });
export const getLogsFailed = (err) => ({ type: GET_LOGS_FAILED, payload: err });
