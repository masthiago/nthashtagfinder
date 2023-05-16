import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); //share authentication information between components

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //indicating that the user is not authenticated.

  //indicating that the user is authenticated
  const login = () => {
    setIsLoggedIn(true);
  };

  //indicating that the user is no longer authenticated.
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    //values available for child components.
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
