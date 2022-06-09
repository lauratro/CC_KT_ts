import React,{useContext,useEffect} from 'react'
import VariableContext from '../../context/VariableContext'
import {useGlobalContext} from "../../context/VariableContext"

export interface Variables {
    isLoggedIn:boolean,
    logout:()=>void,
    login:()=>void,
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
    children?: React.ReactNode
   }
const Logout:React.FC=()=> {
    const userLogged = localStorage.getItem("isLogged")
    const {isLoggedIn, logout } = useGlobalContext()
   // const appContext = () => useContext(VariableContext)
    //const { isLoggedIn,setIsLoggedIn } = appContext as Variables
    
    console.log(isLoggedIn)

    const logOut =()=>{
       logout()
    }
  return (
    <div>
{ isLoggedIn&&
  <button onClick={logOut}>Logout</button>
}
      
    </div>
  )
}
export default Logout;