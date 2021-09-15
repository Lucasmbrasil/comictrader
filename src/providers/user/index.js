import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import fakeapi from "../../services/fakeapi";
// import { useAuth } from "../auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [userId, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState();
  const [rating, setRating] = useState();
  const [trades, setTrades] = useState();
  const [profileName, setProfileName] = useState("");
  const [profileLocation, setProfileLocation] = useState();
  const [profileRating, setProfileRating] = useState();
  const [profileTrades, setProfileTrades] = useState();
  const [comicsOwned, setComicsOwned] = useState();
  const [comicsWanted, setComicsWanted] = useState();

  // const { setAuthenticated } = useAuth();
  const getUsersList = () => {
    const token = localStorage.getItem("@comictrader:token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    fakeapi.get("users", config).then((res) => {
      localStorage.setItem(
        "@comictrader:usersList",
        JSON.stringify(res.data || [])
      );
    });
  };

  const getId = () => {
    const token = localStorage.getItem("@comictrader:token") || "";
    const userId = localStorage.getItem("@comictrader:userID");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    if (token) {
      // const decoderId = jwtDecode(token);
      // setUserId(decoderId.sub);
      fakeapi.get(`users/${userId}`, config).then((response) => {
        setName(response.data.name);
        setLocation(response.data.state);
        setRating(response.data.rating);
        setTrades(response.data.trades);
      });
    }
  };

  const updateUserComics = () => {
    const token = localStorage.getItem("@comictrader:token");
    const userId = localStorage.getItem("@comictrader:userID");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    fakeapi
      .get(`users/${userId}`, config)
      .then((response) => {
        localStorage.setItem(
          "@comictrader:ownedList",
          JSON.stringify(response.data.comics_owned || [])
        );
        localStorage.setItem(
          "@comictrader:wantedList",
          JSON.stringify(response.data.comics_wanted || [])
        );
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getId();
  }, []);

  const getProfile = (profileID) => {
    const token = localStorage.getItem("@comictrader:token") || "";
    const config = { headers: { Authorization: `Bearer ${token}` } };
    if (token) {
      fakeapi.get(`users/${profileID}`, config).then((res) => {
        setProfileLocation(res.data.state);
        setProfileName(res.data.name);
        setProfileRating(res.data.rating);
        setProfileTrades(res.data.trades);
      });
    }
  };

  const addRating = (data, config) => {
    const userId = localStorage.getItem("@comictrader:userID");

    fakeapi
      .patch(`users/${userId}`, data, config)
      .then((e) => {
        setRating(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UserContext.Provider
      value={{
        addRating,
        getId,
        // userId,
        profileName,
        profileLocation,
        profileRating,
        profileTrades,
        getProfile,
        name,
        location,
        rating,
        trades,
        updateUserComics,
        getUsersList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
