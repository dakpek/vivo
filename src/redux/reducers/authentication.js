import { actionConstants } from '../actions/action-consts'

export const signIn = (state = {loading: false, error: false, merchant: {}}, action) => {
  switch (action.type) {
  case actionConstants.SIGN_IN_STARTED:
    return {
      ...state,
      loading: true,
    }
  break;
  case actionConstants.SIGN_IN_SUCCESS:
    localStorage.setItem('token', action.payload.data.accessToken) // not working fully. investigate
    localStorage.setItem('id', action.payload.data.Merchant_ID) // not working fully. investigate
    return {
      loading: false,
      error: false,
      merchant: {
        token: action.payload.data.accessToken,
        id: action.payload.data.Merchant_ID,
        name: action.payload.data.merchant_name,
      }
    }
  break;
  case actionConstants.SIGN_IN_ERROR:
    return {
      loading: false,
      error: true,
    }
    break;
  default: return state;
  }
}

export const signUp = (state = {loading: false, error: false, merchant: {}}, action) => {
  switch (action.type) {
  case actionConstants.SIGN_UP_STARTED:
      return {
        ...state,
        loading: true,
      }
    break;
  case actionConstants.SIGN_UP_SUCCESS:
      localStorage.setItem('token', action.payload.accessToken) // not working fully. investigate
      localStorage.setItem('id', action.payload.Merchant_ID) // not working fully. investigate
      return {
        loading: false,
        error: false,
        merchant: {
          token: action.payload.accessToken,
          id: action.payload.Merchant_ID,
          name: action.payload.merchant_name,
        }
      }
    break;
  case actionConstants.SIGN_UP_ERROR:
      return {
        loading: false,
        error: true,
      }
    break;
  default: return state;
  }
}
