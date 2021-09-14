import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import fakeapi from "../../services/fakeapi";
import { useAuth } from "../auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState();
  const [rating, setRating] = useState();
  const [trades, setTrades] = useState();
  const token = localStorage.getItem("@comictrader:token");
  // const config = { headers: { Authorization: `Bearer ${token}`}}

  const { setAuthenticated } = useAuth();

  const getId = () => {
    const userId = localStorage.getItem("@comictrader:id");
    const token = localStorage.getItem("@comictrader:token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    fakeapi
      .get(`users/${userId}/`, config)
      .then((response) => {
        setName(response.data.name);
        setLocation([response.data.state, response.data.country]);
        setRating(response.data.rating);
        setTrades(response.data.trades);
      })
      .catch((e) => "disgraça");
  };

  useEffect(() => {
    getId();
  }, [token]);

  const addRating = (data, config) => {
    fakeapi
      .patch(`users/${userId}`, data, config)
      .then((e) => {
        setRating(data);
      })
      .catch((e) => {
        console.log("disgraça de rating", e);
      });
  };

  return (
    <UserContext.Provider
      value={{
        addRating,
        userId,
        name,
        location,
        rating,
        trades,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
