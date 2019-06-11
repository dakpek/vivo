import { actionConstants } from '../actions/action-consts'

export const boxes = (state = {
  list: [],
  loading: null,
  error: null
  }, action) => {
  switch (action.type) {
                                                                                // CART
  case actionConstants.GET_BOXES_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_BOXES_SUCCESS :
    return {
      ...state,
      loading: false,
      list: action.payload
    }
    break;
  case actionConstants.GET_BOXES_ERROR:
    return {
      ...state,
      loading: false,
      error: true,
    }
    break;
  default: return state;
  }
}
