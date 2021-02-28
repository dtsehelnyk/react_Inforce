import { getStorageData } from '../helpers/localStorage';

const productsArray = getStorageData('products');

console.log(productsArray);

const initialState = {
  products: productsArray,
}

// type sortAction = {
//   type: string,
//   payload: {

//   }
// }

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
      }

    default:
      return state;
  }
}

export const sortProducts = (products) => ({
  type: 'SET_SORT_PRODUCTS',
  payload: products,
})
