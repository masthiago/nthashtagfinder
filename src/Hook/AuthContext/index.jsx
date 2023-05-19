import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); //hook that shares authentication information between components

export const AuthProvider = ({ children }) => {
  //starts authentication based on value stored in localStorage
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn' === 'true')
  );

  //indicates that the user is authenticated and saved in storage
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  //indicates that the user is no longer authenticated and remove in storage
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    //values available for child components.
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userName, setUserName, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
