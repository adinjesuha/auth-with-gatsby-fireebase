import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./reducers/rootReducer"
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import firebase from '../firebase'

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)


const rrfProps = {
  firebase: typeof window !== "undefined" ? firebase : {},
  config: {
    userProfile: 'users',
    // useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

export default ({ element }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {element}
    </ReactReduxFirebaseProvider>
  </Provider>
)