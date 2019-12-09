import React from 'react';
import styled from 'styled-components'
import { Row,Col } from 'reactstrap';
import { MdFavorite } from 'react-icons/md'

const Wrapper = styled.footer`
  text-align: center !important;
  padding: 19px 30px 20px;
  background-color: #f1f2f5;
  right: 0;
  left: 240px;
`

const Footer = () => (
  <Wrapper>
    <div className="container-fluid">
      <Row>
        <Col>
          {new Date().getFullYear()} <span className="d-none d-sm-inline-block"> - Crafted with <MdFavorite className="text-danger"/> by Adin Jesuha</span>
        </Col>
      </Row>
    </div>
  </Wrapper>
);


export default Footer;
