const initialState = {
  filter: '',
}

// type sortAction = {
//   type: string,
//   payload: {

//   }
// }

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BY_NAME':
      return {
        ...state,
        filter: 'BY_NAME',
      }
    
    case 'BY_PRIORITY':
      return {
        ...state,
        filter: 'BY_PRIORITY',
      }

    case 'BY_PRESENCE':
      return {
        ...state,
        filter: 'BY_PRESENCE',
      }

    default:
      return state;
  }
}

export const sortProducts = (filter) => ({
  type: filter,
  payload: filter,
})