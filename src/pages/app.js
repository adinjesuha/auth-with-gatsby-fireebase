import React from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import { connect } from "react-redux";

import Layout from "../components/layout"
import Dashboard from "../components/Routes/Dashboard"
import CreatePost from '../components/Routes/CreatePost'
import EditPost from '../components/Routes/EditPost'

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
  if (!user) {
    navigate(`/`, { replace: true })
    return null
  }
  return <Component user={user} {...rest} />
}

const App = ({ auth }) => {
  const user = auth.uid
  if(!auth.isLoaded) return <p>Loading...</p>
  else if(!auth.uid){
    navigate("/", { replace: true })
    return null
  }
  return (
    <Layout>
      <Router>
        <PrivateRoute user={user} path="/app/dashboard" component={Dashboard} />
        <PrivateRoute user={user} path="/app/dashboard/create-post" component={CreatePost} />
        <PrivateRoute user={user} path="/app/dashboard/edit-post/:id" component={EditPost} />
      </Router>
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(App)