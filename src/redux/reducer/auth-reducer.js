import {
  GET_ME,
  SHOW_LOADING,
  HIDDEN_LOADING,
  HIDDEN_ERROR,
  SHOW_ERROR,
  LOGOUT,
  CREATE_POST
} from "../types"

const initialState = {
  user: {},
  post: [],
  loading: false,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME: {
      return {
        ...state,
        user: action.payload
      }
    }
    case LOGOUT: {
      return {
        ...state,
        user: {}
      }
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case HIDDEN_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    case HIDDEN_ERROR: {
      return {
        ...state,
        error: null
      }
    }
    case SHOW_ERROR: {
      return {
        ...state,
        error: 'ой что то не так!'
      }
    }
    case CREATE_POST:{
      return{
        ...state,
        post:action.payload
      }
    }
    default:
      return state
  }
}