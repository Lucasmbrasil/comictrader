import { createContext, useContext, useState } from "react";
import comic from "../../services/comic";

export const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
  const [comicsOwned, setComicsOwned] = useState([]);
  const [comicsWanted, setComicsWanted] = useState([]);

  // const config = { headers: { Authorization: `Bearer ${token}`}}
  // const userid = numseioquelá

  const updateOwned = (userid, config) => {
    comic.get(`users/${userid}`, config).then((response) => {
      setComicsOwned(response.data.comics_owned);
      setComicsWanted(response.data.comics_wanted);
    });
  };

  const addOwned = (data, userid, config) => {
    comic
      .patch(`users/${userid}`, data, config)
      .then((e) => {
        //   toast que deu certo
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addWanted = (data, userid, config) => {
    comic
      .patch(`users/${userid}`, data, config)
      .then((e) => {
        setComicsWanted([...comicsWanted, e.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeOwned = (data, userid, config, item) => {
    const filteredOwned = comicsOwned.filter((comic) => comic.id !== item.id);
    data = filteredOwned;
    comic.patch(`users/${userid}`, data, config).then((e) => {
      setComicsOwned([filteredOwned]);
    });
  };

  const removeWanted = (data, userid, config, item) => {
    const filteredWanted = comicsWanted.filter((comic) => comic.id !== item.id);
    data = filteredWanted;
    comic.patch(`users/${userid}`, data, config).then((e) => {
      setComicsWanted([filteredWanted]);
    });
  };

  return (
    <ComicsContext.Provider
      value={{
        addOwned,
        addWanted,
        removeOwned,
        removeWanted,
        comicsOwned,
        comicsWanted,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => useContext(ComicsContext);
