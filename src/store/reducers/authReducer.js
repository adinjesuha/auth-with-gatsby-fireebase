import { 
  SIGNIN_SUCCESS, 
  SIGNIN_ERROR, 
  SIGNUP_SUCCESS, 
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  RESET_SUCCESS,
  RESET_ERROR 
} from "../actions/actionTypes";

const initState = {
  authError: null,
  resetMessage: null
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
    case RESET_SUCCESS:
      console.log("reset password sucsess")
      return {
        ...state,
        authError: null,
        resetMessage: "Reset email sent. Go check your inbox."
      }
    case RESET_ERROR:
      console.log('reset password error')
      return{
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer