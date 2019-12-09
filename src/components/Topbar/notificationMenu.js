import React, {useState} from "react"
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { FaRegBell } from 'react-icons/fa'
import { FiShoppingCart, FiMessageCircle, FiTruck } from 'react-icons/fi'

import NavList from './styles'

const NotificationMenu = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <NavList
      isOpen={toggle}
      toggle={() => setToggle(!toggle)}
      tag="li"
      className="list-inline-item mr-1"
    >
      <DropdownToggle tag="a" className="nav-link">
        <FaRegBell />
        <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
      </DropdownToggle>
      <DropdownMenu
        className="dropdown-menu__lg"
        right
      >
        <h6 className="dropdown-item-text">Notifications (258) </h6>
        <DropdownItem 
          tag="a" 
          href="#" 
          className="notify-item active"
        >
          <div className="notify-item__icon bg-success">
            <FiShoppingCart/>
          </div>
          <p className="notify-item__details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
        </DropdownItem>
        <DropdownItem 
          tag="a" 
          href="#" 
          className="notify-item"
        >
          <div className="notify-item__icon bg-warning">
            <FiMessageCircle/>
          </div>
          <p className="notify-item__details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
        </DropdownItem>
        <DropdownItem 
          tag="a" 
          href="#" 
          className="notify-item"
        >
          <div className="notify-item__icon bg-info">
            <FiTruck/>
          </div>
          <p className="notify-item__details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
        </DropdownItem>
        <DropdownItem 
          tag="a" 
          href="#" 
          className="text-center text-primary notify-all"
        >View all</DropdownItem>
      </DropdownMenu>
    </NavList>
  )
}

export default NotificationMenu