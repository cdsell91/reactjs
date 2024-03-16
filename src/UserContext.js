import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  
    const login = (userData) => {
      setUser(userData.user);
      setToken(userData.token);
    };
  
    const logout = () => {
      setUser(null);
      setToken(null);
    };
  
    return (
      <UserContext.Provider value={{ user, token, login, logout }}>
        {children}
      </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}