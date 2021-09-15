import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = localStorage.getItem("@comictrader:token") || false;

  const [authenticated, setAuthenticated] = useState(initialState);

  useEffect(() => {
    if (initialState !== false) {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
