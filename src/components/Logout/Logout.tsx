import React from 'react'

import {useGlobalContext} from "../../context/VariableContext"


const Logout:React.FC=()=> {
   
    const {isLoggedIn, logout } = useGlobalContext()

    


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