import {
  ADD_SHOP,
  ADD_SHOP_SUCCESS,
  ADD_SHOP_FAILED,
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
  GET_LOGS,
  GET_LOGS_SUCCESS,
  GET_LOGS_FAILED,
  RESET_ERROR_MESSAGE,
} from "./types";

export const shopReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_SHOP:
      return { ...state, addShopLoading: true };
    case ADD_SHOP_SUCCESS:
      return { ...state, addShopLoading: false, message: { message: action.payload, type: "success" } };
    case ADD_SHOP_FAILED:
      return { ...state, addShopLoading: false, message: { message: action.payload, type: "error" } };
    case DELETE_SHOP:
      return { ...state, deleteShopLoading: true };
    case DELETE_SHOP_SUCCESS:
      return { ...state, deleteShopLoading: false, message: { message: action.payload, type: "success", sticky: true } };
    case DELETE_SHOP_FAILED:
      return { ...state, deleteShopLoading: false, message: { message: action.payload, type: "error", sticky: true } };
    case RESET_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, addProductLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, addProductLoading: false, message: { message: action.payload, type: "success" } };
    case ADD_PRODUCT_FAILED:
      return { ...state, addProductLoading: false, message: { message: action.payload, type: "error" } };
    case UPDATE_PRODUCT:
      return { ...state, updateProductLoading: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, updateProductLoading: false, message: { message: action.payload, type: "success" } };
    case UPDATE_PRODUCT_FAILED:
      return { ...state, updateProductLoading: false, message: { message: action.payload, type: "error" } };
    case DELETE_PRODUCT:
      return { ...state, deleteProductLoading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, deleteProductLoading: false, message: { message: action.payload, type: "success", sticky: true } };
    case DELETE_PRODUCT_FAILED:
      return { ...state, deleteProductLoading: false, message: { message: action.payload, type: "error", sticky: true } };
    case RESET_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

const initialAuthState = {
  message: {
    success: false,
    token: undefined,
  },
  loading: false,
};

export const authReducer = (state = initialAuthState, action = {}) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return { ...state, loading: false, message: action.payload };
    case SIGN_IN_FAILED:
      return { ...state, loading: false, message: "Failed to sign in" };
    case LOG_OUT:
      return { ...state, message: { success: false } };
    default:
      return state;
  }
};

export const searchReducer = (state = { searchQuery: "", error: null }, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, loading: true };
    case SEARCH_SUCCESS:
      return { ...state, loading: false, searchResult: action.payload };
    case SEARCH_FAILED:
      return { ...state, loading: false, errorMessage: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case RESET_ERROR_MESSAGE:
      return { ...state, errorMessage: null };
    default: {
      return state;
    }
  }
};

export const logReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, loading: true };
    case GET_LOGS_SUCCESS:
      return { ...state, loading: false, logs: action.payload };
    case GET_LOGS_FAILED:
      return { ...state, loading: false, errorMessage: action.payload };
    case RESET_ERROR_MESSAGE:
      return { ...state, errorMessage: null };
    default:
      return state;
  }
};
