import { combineReducers } from "redux"
import authReducer from "./authReducer"
import postReducer from "./postReducer"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})