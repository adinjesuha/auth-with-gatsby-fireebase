import React from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

import SEO from '../seo'
import { PageTitle } from './styles'
import CardListing from '../Cards/cardListing'


const Dashboard = () => {
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
              <Button className="btn-primary">Create a post</Button>
            </div>
          </Col>
        </Row>
      </PageTitle>
      <CardListing />
    </Container>
  )
}

export default Dashboard