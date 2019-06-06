import { actionConstants } from '../actions/action-consts'

//SIGN IN
export const user = (state = {loading: false, error: false, uid: "", data: {}}, action) => {
  switch (action.type) {
  case actionConstants.SIGN_IN_STARTED:
    return {
      ...state,
      loading: true,
    }
  break;
  case actionConstants.SIGN_IN_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      uid: action.payload.uid,
      data: action.payload
    }
  break;
  case actionConstants.SIGN_IN_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
    break;
    case actionConstants.SIGN_UP_STARTED:
    return {
      ...state,
      loading: true,
    }
  break;
  case actionConstants.SIGN_UP_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      uid: action.payload,
    }
  break;
  case actionConstants.SIGN_UP_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    }
  break;
  case actionConstants.SIGN_OUT_SUCCESS:
    return {
      loading: false,
      error: false
    }
  break;
    case actionConstants.GET_USER_STARTED:
    return {
      ...state,
      loading: true,
    }
  break;
  case actionConstants.GET_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: false,
      data: {
        email: action.payload,
      }
    }
  break;
  case actionConstants.GET_USER_ERROR:
    return {
      ...state,
      loading: false,
      error: true,
    }
  break;
  case actionConstants.EDIT_USER_STARTED:
    return {
      ...state,
      loading: true,
    }
  break;
  case actionConstants.EDIT_USER_SUCCESS:

    return {
      ...state,
      loading: false,
      error: false,
      data: action.payload
    }
  break;
  case actionConstants.EDIT_USER_ERROR:
    return {
      ...state,
      loading: false,
      error: true,
    }
  break;
  default: return state;
  }
}

