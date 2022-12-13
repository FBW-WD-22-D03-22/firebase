import { React, useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  return (
    <AuthContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
