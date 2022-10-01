import {combineReducers} from 'redux';
import ProductReducer from './productReducer';
import DetailProduct from './DetailProduct';

const AllReducer = combineReducers({
  ProductReducer,
  DetailProduct,
});

export default AllReducer;
