import { actionConstants } from '../actions/action-consts'

export const catalog = (state = {
  pads: {
      super: null,
      normal: null,
      daily: null
  },
  tampons: null,
  pills: null,
  loading: null,
  error: null
  }, action) => {
  switch (action.type) {
                                                                                // CART
  case actionConstants.GET_CATALOG_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_CATALOG_SUCCESS :
    return {
      ...state,
      loading: false,
      pads: action.payload.pads,
      tampons: action.payload.tampons,
      pills: action.payload.pills
    }
    break;
  case actionConstants.GET_CATALOG_ERROR:
    return {
      ...state,
      loading: false,
      error: true,
    }
    break;
  default: return state;
  }
}
