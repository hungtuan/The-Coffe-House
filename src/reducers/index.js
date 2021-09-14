import { combineReducers } from "redux";
import productReducer from "./productReducer";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
    productReducer
});

export default rootReducer;
