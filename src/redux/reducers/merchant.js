import { actionConstants } from '../actions/action-consts'

export const merchantDetails = (state = {
  loading: false,
  error: false,
  offers: [],
  claims: [],
  transactions: [],
  details: {}
  }, action) => {
  switch (action.type) {
                                                                                // MERCHANT DETAILS
  case actionConstants.GET_MERCHANT_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_MERCHANT_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      details: action.payload.data
    }
    break;
  case actionConstants.GET_MERCHANT_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
                                                                                // CLAIMS
  case actionConstants.GET_CLAIMS_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_CLAIMS_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      claims: action.payload.data
    }
    break;
  case actionConstants.GET_CLAIMS_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
                                                                                // OFFERS
  case actionConstants.GET_OFFERS_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_OFFERS_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      offers: action.payload.data
    }
    break;
  case actionConstants.GET_OFFERS_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
                                                                                // REDEMPTIONS
  case actionConstants.GET_REDEMPTIONS_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_REDEMPTIONS_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      redemptions: action.payload.data
    }
    break;
  case actionConstants.GET_REDEMPTIONS_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
                                                                                // TRANSACTIONS
  case actionConstants.GET_TRANSACTIONS_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_TRANSACTIONS_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      transactions: action.payload.data
    }
    break;
  case actionConstants.GET_TRANSACTIONS_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
                                                                                // CUSTOMERS
  case actionConstants.GET_CUSTOMERS_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.GET_CUSTOMERS_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false,
      customers: action.payload.data
    }
    break;
  case actionConstants.GET_CUSTOMERS_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;

  case actionConstants.UPDATE_INFO_STARTED :
    return {
      ...state,
      loading: true
    }
    break;
  case actionConstants.UPDATE_INFO_SUCCESS :
    return {
      ...state,
      loading: false,
      error: false
    }
    break;
  case actionConstants.UPDATE_INFO_ERROR :
    return {
      loading: false,
      error: true,
    }
    break;
  default: return state;
  }
}
