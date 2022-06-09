import React from 'react'
import "./Header.css"
import Logout from "./../Logout/Logout"

const Header:React.FC=()=> {
  return (
     <div className="headerCont">
    <div className='companyName'>INFECTOPHARM</div>
    <Logout />
</div>
  )
}
export default Header;