import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FaEdit } from 'react-icons/fa'

const Wrapper = styled.div`
  padding: 20px 0;
  .page-title{
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
  }
  .breadcrumb{
    padding: 4px 0;
    background-color: transparent;
    margin-bottom: 0;
  }
`

const ButtonLink = styled(Link)`
  background: #542c85;
  font-size: 0.85rem;
  padding: 0.6rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: white;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  svg {
    margin-right: 5px;
    margin-bottom: 1px;
  }
  &:hover{
    color: rgba(255, 255, 255, 0.7);
  }
`

const Title = ({title, breadcrumb}) => {
  return (
    <Wrapper className="page-title-box">
      <Row className="align-items-center">
        <Col sm="6">
          <h4 className="page-title">{title}</h4>
          <Breadcrumb>
            <BreadcrumbItem active>{breadcrumb}</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col sm="6">
          <div className="float-right d-none d-md-block">
            <ButtonLink to="/app/dashboard/create-post">
              <span>
                <FaEdit />
                Create a post
              </span>
            </ButtonLink>
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Title