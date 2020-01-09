import React from "react"

import SEO from "../components/seo"
import Login from '../components/Auth/login'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Login />
  </Layout>
)

export default IndexPage
