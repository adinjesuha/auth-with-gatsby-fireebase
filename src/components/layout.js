import React from "react"
import styled from 'styled-components'

import Tobar from './Topbar/'
import Sidebar from './SideBar/'
import "../styles/bootstrap.min.css"
import "../styles/layout.css"
import Footer from "./footer"

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

const Layout = ({ children }) => {

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

export default Layout
