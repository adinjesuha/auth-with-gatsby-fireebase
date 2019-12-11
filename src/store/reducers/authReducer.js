import { 
  SIGNIN_SUCCESS, 
  SIGNIN_ERROR, 
  SIGNUP_SUCCESS, 
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS
} from "../actions/actionTypes";

const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_ERROR:
      console.log("login error")
      return {
        ...state,
        authError: "Login fail",
      }
    case SIGNIN_SUCCESS:
      console.log("login sucsess")
      return {
        ...state,
        authError: null,
      }
    case SIGNUP_SUCCESS:
      console.log("singup success")
      return {
        ...state,
        authError: null,
      }
    case SIGNUP_ERROR:
      console.log("signup error")
      return {
        ...state,
        authError: action.err.message,
      }
    case SIGNOUT_SUCCESS:
      console.log("signout success")
      return state
    default:
      return state
  }
}

export default authReducer