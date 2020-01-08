import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 240px;
  z-index: 10;
  background: #333547;
  bottom: 0;
  margin-top: 0;
  padding-bottom: 30px;
  position: fixed;
  top: 70px;
  ul{
    .menu-title{
      padding: 12px 20px !important;
      letter-spacing: 1px;
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      color:#b4bfcc;
    }
    p{
      margin:0
    }
    a, p{
      color: #8699ad;
      font-size: 15.7px;
      display: block;
      padding: 12.5px 20px;
      transition: all .5s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        margin-right: 8px;
      }
      &:active{
        outline: none;
      }
      &:hover{
        color: #b4c9de;
      }
      &.active-link{
        color: #b4c9de;
        background-color: #383b4e;
      }
    }
  }
`

const Sidebar = () => {
  return (
    <Wrapper>
      <ul>
        <li className="menu-title">Main</li>
        <li>
          <Link 
            to="/app/dashboard" 
            activeClassName="active-link">
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <p>
            <span>Places</span>
            <span className="badge badge-success badge-pill">6</span>
          </p>
        </li>
        <li>
          <p>
            <span>Travels</span>
          </p>
        </li>
        <li>
          <p>
            <span>Users</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Sidebar