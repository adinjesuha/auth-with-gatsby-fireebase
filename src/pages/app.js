import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import Layout from "../components/layout"
import Dashboard from "../components/Routes/Dashboard"

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
  if (!user) {
    navigate(`/`, { replace: true })
    return null
  }
  return <Component user={user} {...rest} />
}

const App = () => {
  const auth = useSelector(state => state.firebase.auth)
  const user = auth.uid
  console.log("user :",auth);
  if(!isLoaded(auth) && !isEmpty(auth)) return <p>loading...</p>
  return (
    <Layout>
      <Router>
        <PrivateRoute user={user} path="/app/dashboard" component={Dashboard} />
      </Router>
    </Layout>
  )
}

export default App