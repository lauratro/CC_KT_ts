import React,{useEffect} from 'react'
import "./Logout.css"

import {useGlobalContext} from "../../context/VariableContext"
import {
  useNavigate
} from "react-router-dom";
import Login from '../Login/Login';

const Logout:React.FC=()=> {
   
    const {isLoggedIn, logout, login } = useGlobalContext()
const token = localStorage.getItem("token")
  const navigate = useNavigate()  
useEffect(()=>{
  if(token !== ""){
    login()
  }
},[token])

    const logOut =()=>{
       logout()
       localStorage.clear()
       navigate("/")

    }
  return (
    <div>
{ isLoggedIn&&
  <button className='logoutButton' onClick={logOut}>Logout</button>
}
      
    </div>
  )
}
export default Logout;