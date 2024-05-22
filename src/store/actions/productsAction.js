// coffeeActions.js

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_DATA = 'SET_DATA';

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, payload: Number(id) };
};

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};

export const setData = (data) => {
  return { type: SET_DATA, payload: data };
};

export const fetchProductData = () => async (dispatch) => {
  try {
    const response = await fetch('https://www.mockapi.io/api/v1/adminpanel');
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    console.error('Error fetching product data:', error.message);
  }
};