import React, { useState, useContext } from "react";

export interface Variables {
  isLoggedIn: boolean;
  logout: () => void;
  login: () => void;
}
interface Props {
  children?: React.ReactNode;
}
export const VariableContext = React.createContext<Variables>({
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
});

const VariableProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const logout = () => {
    setIsLoggedIn(false);
  };
  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <VariableContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </VariableContext.Provider>
  );
};
export const useGlobalContext = () => useContext(VariableContext);
export default VariableProvider;
