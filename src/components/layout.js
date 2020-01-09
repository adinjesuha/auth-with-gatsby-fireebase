import React from "react"
import styled from 'styled-components'
import { connect } from "react-redux";

import Tobar from './Topbar/'
import Sidebar from './SideBar/'
import Footer from "./footer"

import "./Css/bootstrap.min.css"
import "./Css/layout.css"

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`

const ContentPage = styled.div`
  margin-left: 240px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  .content{
    padding: 0 15px 10px;
    margin-top: 70px;
    margin-bottom: 60px;
  }
`

const Layout = ({ children, auth }) => {
  if(!auth.uid){
    return <React.Fragment>{children}</React.Fragment>
  }
  return (
    <Wrapper>
      <Tobar />
      <Sidebar />
      <ContentPage>
        <div className="content">{children}</div>
        <Footer />
      </ContentPage>
    </Wrapper>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Layout)

