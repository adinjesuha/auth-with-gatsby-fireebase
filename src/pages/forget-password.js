import React from "react"

import SEO from "../components/seo"
import ResetPassword from '../components/Auth/resetPassword'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO title="Reset Password" />
    <ResetPassword />
  </Layout>
)

export default IndexPage