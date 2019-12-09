import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"

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
  const user = true
  return (
    <Layout>
      <Router>
        <PrivateRoute user={user} path="/app/dashboard" component={Dashboard} />
      </Router>
    </Layout>
  )
}

export default App