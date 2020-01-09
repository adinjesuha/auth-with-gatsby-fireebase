import React from "react"

import SEO from "../components/seo"
import Register from '../components/Auth/register'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Register" />
    <Register />
  </Layout>
)

export default IndexPage