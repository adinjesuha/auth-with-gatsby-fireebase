import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

import SEO from '../seo'
import { PageTitle } from './styles'
import PostList from '../Posts/postList'


const Dashboard = ({posts}) => {
  return (
    <Container>
      <SEO title="Dashboard" />
      <PageTitle className="page-title-box">
        <Row className="align-items-center">
          <Col sm="6">
            <h4 className="page-title">Dashboard</h4>
            <Breadcrumb>
              <BreadcrumbItem active>Welcome to Gatsby with Firebase App</BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col sm="6">
            <div className="float-right d-none d-md-block">
              <Link to="/app/dashboard/create-post" className="btn-primary">Create a post</Link>
            </div>
          </Col>
        </Row>
      </PageTitle>
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