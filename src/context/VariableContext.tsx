import React, { useState, useContext } from "react";

export interface Variables {
  isLoggedIn: boolean;
  logout: () => void;
  login: () => void;
  searchedText:string
  setSearchedText: React.Dispatch<React.SetStateAction<string>>,
}
interface Props {
  children?: React.ReactNode;
}
export const VariableContext = React.createContext<Variables>({
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
  searchedText: "",
  setSearchedText:()=>{}
});

const VariableProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const[searchedText,setSearchedText]=useState<string>("")
  const logout = () => {
    setIsLoggedIn(false);
  };
  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <VariableContext.Provider value={{ isLoggedIn, logout, login,searchedText, setSearchedText  }}>
      {children}
    </VariableContext.Provider>
  );
};
export const useGlobalContext = () => useContext(VariableContext);
export default VariableProvider;
