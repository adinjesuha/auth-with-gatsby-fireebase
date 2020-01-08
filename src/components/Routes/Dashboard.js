import React from 'react'
import { Container } from 'reactstrap'
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

import SEO from '../seo'
import PageTitle from '../title'
import PostList from '../Posts/postList'


const Dashboard = ({posts}) => {
  return (
    <Container>
      <SEO title="Dashboard" />
      <PageTitle 
        title="Dashboard"
        breadcrumb="Welcome to Gatsby with Firebase App"
      />
      <PostList posts={posts}/>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", orderBy: ["createdAt", "desc"] }
  ])
)(Dashboard)