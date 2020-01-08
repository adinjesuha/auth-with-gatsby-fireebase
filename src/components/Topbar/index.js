import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'

import Image from '../image'
import NotificationMenu from './notificationMenu'
import ProfileMenu from './profileMenu'
import SearchMenu from './searchMenu'

const TopBar = styled.div`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  .topbar-left{
    background: #333547;
    float: left;
    text-align: center;
    height: 70px;
    position: relative;
    width: 240px;
    z-index: 1;
    &__logo{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      margin-left: 20px;
      .logo-wrapper{
        width: 120px;
      }
    }
  }
  .topbar-right{
    background-color: #ececf1;
    border-radius: 0;
    margin-bottom: 0;
    padding: 0 10px 0 0;
    margin-left: 240px;
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    > ul {
      display: flex;
    }
  }
`


const Topbar = () => {
  return (
    <TopBar>
      <div className="topbar-left">
        <Link to="/" className="topbar-left__logo">
          <div className="logo-wrapper">
            <Image imgName="logo.png" />
          </div>
        </Link>
      </div>
      <nav className="topbar-right">
        <div></div> 
        <ul>
          <SearchMenu />
          <NotificationMenu />
          <ProfileMenu />
        </ul>
      </nav>
    </TopBar>
  )
}

export  default Topbar