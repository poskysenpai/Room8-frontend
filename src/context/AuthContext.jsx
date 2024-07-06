import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if token exists in local storage and decode it
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      localStorage.setItem('token', token);
      // Delete Token after 9 minutes and 30 seconds
      // setTimeout(() => {
      //   logout(),
      //   570000
      // }); 
    } catch (error) {
      console.error('Failed to decode token:', error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const getUser = () => {
    // Check if token exists in local storage and decode it
    const token = localStorage.getItem('token');
    let decodedUser = null;
    if (token) {
      try {
        decodedUser = jwtDecode(token);
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('token');
      }
    }
    return decodedUser;
  }

  const value = { user, getUser, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
