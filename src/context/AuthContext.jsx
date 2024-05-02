/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("user", JSON.stringify(authUser));
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
