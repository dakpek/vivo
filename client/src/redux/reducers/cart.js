import { actionConstants } from '../actions/action-consts'

export const cart = (state = {
  content: null,
  prices: null,
  name: null,
  totalPrice: null,
  loading: null,
  error: null,
  
  }, action) => {
  switch (action.type) {
                                                                                // CART
  case actionConstants.CART_CHANGE_STARTED :
    return {
      loading: true
    }
    break;
  case actionConstants.CART_CHANGE_SUCCESS :
    console.log('ACTION PAYLOAD: ', action.payload)
    return {
      loading: false,
      content: action.payload.content,
      prices: action.payload.prices,
      name: action.payload.name,
      totalPrice: action.payload.totalPrice,
    }
    break;
  default: return state;
  }
}
