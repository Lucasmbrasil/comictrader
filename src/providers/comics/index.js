import { createContext, useCallback, useContext, useState } from "react";
import comic from "../../services/comic";
import fakeapi from "../../services/fakeapi";

export const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
  const [comicsOwned, setComicsOwned] = useState([]);
  const [comicsWanted, setComicsWanted] = useState([]);
  const [comicsList, setComicsList] = useState([]);
  const [id, setId] = useState(0);
  const [specificComic, setSpecificComic] = useState([]);

  const token = localStorage.getItem("@comictrader:token");

  const config = { headers: { Authorization: `Bearer ${token}` } };
  // const userid = numseioquelá

  const updateOwned = (userid) => {
    fakeapi.get(`users/${userid}`, config).then((response) => {
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

  const getComicsList = () => {
    const url = {
      url: "http://comicvine.gamespot.com/api/issues/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json&sort=cover_date:desc",
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        setComicsList(response.data.results);
      })

      .catch((e) => console.log(e));
  };

  const searchComics = (input) => {
    const url = {
      url: `https://comicvine.gamespot.com/api/search/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json&query=${input}&resources=issue`,
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        input.length < 1
          ? getComicsList()
          : setComicsList(response.data.results);
      })
      .catch((e) => console.log(e));
  };

  const getComic = (id) => {
    const url = {
      url: `https://comicvine.gamespot.com/api/volume/4050-${id}/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json`,
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        setSpecificComic(response.data.results);
        setId(response.data.results.id);
      })
      .catch((e) => console.log(e));
  };

  return (
    <ComicsContext.Provider
      value={{
        updateOwned,
        addOwned,
        addWanted,
        removeOwned,
        removeWanted,
        comicsOwned,
        comicsWanted,
        getComicsList,
        searchComics,
        comicsList,
        setId,
        id,
        getComic,
        specificComic,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => useContext(ComicsContext);
