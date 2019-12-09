import { Dropdown } from 'reactstrap';
import styled from 'styled-components'

const NavList = styled(Dropdown)`
  display: inline-block;
  &.show > a{
    background-color: ${props => props.isOpen 
      ? 'rgba(42,49,66,.05)' 
      : 'initial'
    };
  }
  .nav-link{
    padding: 0 15px;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    svg{
      font-size: 24px;
      vertical-align: middle;
      color: #525f80;
    }
    .noti-icon-badge {
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 12px;
    }
  }
  .nav-user{
    height: 36px;
    width: 36px;
  }
  .dropdown-menu{
    &__lg{
      width: 300px;
    }
    .dropdown-item{
      padding: .55rem 1.5rem;
      font-size: 14px !important;
      &:first-child{
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
      }
      &:last-child{
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
      svg{
        margin-right: 8px;
        color: #6c757d;
      }
    }
    .notify-item{
      padding: 10px 20px;
      display: flex;
      width: 100%;
      &__icon{
        height: 40px;
        width: 40px;
        margin-right: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
          margin-right: 1px;
          color: white;
        }
      }
      &__details{
        font-weight: 500;
        text-overflow: ellipsis;
        white-space: normal;
        width: calc(100% - 50px);
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        span{
          line-height: 1.6;
        }
      }
      &.active{
        background-color: #f8f9fa;
        color: #2a3142;
      }
    }
    &:not(.dropdown-menu__lg){
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`

export default NavList