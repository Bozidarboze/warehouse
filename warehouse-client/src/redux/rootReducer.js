import { combineReducers } from "redux";
import { shopReducer, productReducer, authReducer, searchReducer, logReducer } from "./app/reducers";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
  authReducer,
  searchReducer,
  logReducer,
});

export default rootReducer;
