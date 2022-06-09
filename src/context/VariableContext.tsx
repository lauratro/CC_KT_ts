//import * as React from 'react';
import React, {useState, useContext, createContext} from "react"

export interface Variables {
   isLoggedIn:boolean,
   logout:()=>void,
   login:()=>void,
  
   children?: React.ReactNode
  }
  interface Props {
    children?: React.ReactNode
  }
export const VariableContext = React.createContext<Variables>({isLoggedIn:false,  logout:()=>{},
    login:()=>{},
    });

const VariableProvider = ({ children }:Props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
const logout =()=>{
    setIsLoggedIn(false)
}
const login =()=>{
    setIsLoggedIn(true)
}

  return <VariableContext.Provider value={{ isLoggedIn, logout, login }}>{children}</VariableContext.Provider>;
}
export const useGlobalContext = () => useContext(VariableContext)
export default VariableProvider;