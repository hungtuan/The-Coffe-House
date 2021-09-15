import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import DetailProduct from "./DetailProduct";

const AllReducer = combineReducers({
    productReducer, cartReducer, DetailProduct
});

export default AllReducer;
