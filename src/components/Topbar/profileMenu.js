import React, {useState} from "react"
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaUserCircle, FaLock, FaPowerOff } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

import Image from '../image'
import NavList from './styles'

const ProfileMenu = () => {
  const [toggle, setToggle] = useState(false)
  return(
    <NavList 
      isOpen={toggle}
      toggle={() => setToggle(!toggle)}
      tag="li"
      className="list-inline-item mr-1"
    >
      <DropdownToggle tag="a" className="nav-link">
        <Image 
          imgName="user.jpg" 
          className="rounded-circle nav-user"
        />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem 
          tag="a" 
          href="#"
        >
          <FaUserCircle />
          Profile
        </DropdownItem>
        <DropdownItem 
          tag="a" 
          href="#"
        >
          <MdSettings />
          Settings
        </DropdownItem>
        <DropdownItem 
          tag="a" 
          href="#"
        >
          <FaLock />
          Lock screen
        </DropdownItem>
        <div className="dropdown-divider" />
        <DropdownItem 
          tag="a" 
          className="text-danger" 
          href="/logout">
          <FaPowerOff className="mdi mdi-power text-danger"/> 
          Logout
        </DropdownItem>
      </DropdownMenu>
    </NavList>
  )
}

export default ProfileMenu