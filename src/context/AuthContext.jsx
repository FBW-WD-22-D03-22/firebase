import { React, useState, useEffect, createContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUsersList] = useState([]);

  return (
    <AuthContext.Provider
      value={{ usersList, setUsersList, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
