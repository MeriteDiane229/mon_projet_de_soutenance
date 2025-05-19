// src/context/AuthContext.js

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Charger depuis localStorage au démarrage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Fonction pour se connecter
  /* const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }; */

  const login = (data) => {
  localStorage.setItem("token", data.token);
  setUser(data); // Tu peux accéder à data.role ici
};

  // Fonction pour se déconnecter
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);
