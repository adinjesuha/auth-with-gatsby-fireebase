import React from 'react'

// SETTING UP REDUX STORE
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer"

// ENHANCING STORE WITH FIREBASE
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from '../firebase'
firebase.firestore()

// INITIAL STATE
const initialState = {}

// CREATE OUR STORE
const store = createStore(
  rootReducer, 
  initialState,
  compose(
    applyMiddleware(reduxThunk.withExtraArgument(getFirebase))
  )
)

// CONFIG OPTIONS FOR FIREBASE INSTANCE
const rrfProps = {
  firebase: typeof window !== "undefined" ? firebase : {},
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance 
}

export default ({ element }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {element}
    </ReactReduxFirebaseProvider>
  </Provider>
)