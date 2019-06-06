import { actionConstants } from '../actions/action-consts'

export const cart = (state = {
  pads: {
      extra: null,
      normal: null,
      daily: null
  },
  tampons: null,
  pills: null,
  loading: null,
  error: null,
  price: null
  
  }, action) => {
  switch (action.type) {
                                                                                // CART
  case actionConstants.CART_CHANGE_SUCCESS :
    return {
      ...state,
      loading: false,
      pads: action.payload.pads,
      tampons: action.payload.tampons,
      pills: action.payload.pills,
      price: action.payload.price
    }
    break;
  default: return state;
  }
}
