import React from "react"
import styled from 'styled-components'

import Tobar from './topbar/topbar'
import Sidebar from './SideBar/sidebar'
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
