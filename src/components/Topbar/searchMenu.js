import React from "react"
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const SearchNavList = styled.li`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  .search-form{
    position:relative;
    display: flex;
    .form-control{
      border: 1px solid #e0e0ea;
      font-size: 13px;
      height: 34px;
      padding-left: 18px;
      padding-right: 40px;
      margin-right: 16px;
      background: #e0e0ea;
      box-shadow: none;
      border-radius: 30px;
      width: 300px;
    }
    svg{
      position: absolute;
      top: 8px;
      right: 26px;
      display: block;
      color:#9ca8b3;
      font-size: 18px;
      border: none;
      background-color:transparent;
    }
  }
`

const SearchMenu = () => {
  return(
    <SearchNavList>
      <form role="search" className="search-form">
        <input type="text" className="form-control" placeholder="Search..." />
        <MdSearch />
      </form>
    </SearchNavList>
  )
}

export default SearchMenu