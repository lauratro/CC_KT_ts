import React from 'react'
import "./Header.css"
import Logout from "./../Logout/Logout"

const Header:React.FC=()=> {
  return (
     <div >
       <div  className='headerCont'>
    <div className='companyName'>INFECTOPHARM</div>
    <Logout />
</div>
</div>
  )
}
export default Header;