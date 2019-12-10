import React from 'react'

// SETTING UP REDUX STORE
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./reducers/rootReducer"

// ENHANCING STORE WITH FIREBASE
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from '../firebase'
firebase.firestore()

const initialState = {}
const store = createStore(
  rootReducer, 
  initialState,
)


const rrfProps = {
  firebase: typeof window !== "undefined" ? firebase : {},
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default ({ element }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {element}
    </ReactReduxFirebaseProvider>
  </Provider>
)