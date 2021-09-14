import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"

const AllReducer = combineReducers({
    productReducer, cartReducer
});

export default AllReducer;
