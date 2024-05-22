// reducers/productReducer.js

import { DELETE_PRODUCT, ADD_PRODUCT, SET_DATA } from '../actions/productsAction';

const initialState = {
  productList: [],
  totalProductCount: 0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        productList: action.payload,
        totalProductCount: action.payload.length
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.payload],
        totalProductCount: state.totalProductCount + 1
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter(product => product.id !== action.payload),
        totalProductCount: state.totalProductCount - 1
      };
    default:
      return state;
  }
};

export default productReducer;
