import { 
  SIGNIN_SUCCESS, 
  SIGNIN_ERROR, 
  SIGNUP_SUCCESS, 
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  RESET_SUCCESS,
  RESET_ERROR
} from "./actionTypes";

export const signIn = credentials => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGNIN_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: SIGNIN_ERROR, err })
      })
  }
}

export const signUp = newUser => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: newUser.username,
          })
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: SIGNUP_ERROR, err })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS })
      })
  }
}

export const resetPassword = email => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({ type: RESET_SUCCESS })
      })
      .catch(err => {
        dispatch({type: RESET_ERROR, err})
      })
  }
}