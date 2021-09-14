import { createContext, useContext, useState } from "react";
import comic from "../../services/comic";
import fakeapi from "../../services/fakeapi";

export const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
  const [comicsOwned, setComicsOwned] = useState([]);
  const [comicsWanted, setComicsWanted] = useState([]);
  const [comicsList, setComicsList] = useState([]);
  const [id, setId] = useState(0);
  const [specificComic, setSpecificComic] = useState([]);

  // const config = { headers: { Authorization: `Bearer ${token}`}}
  // const userid = numseioquelá

  // const updateOwned = (userid, config) => {
  //   comic.get(`users/${userid}`, config).then((response) => {
  //     setComicsOwned(response.data.comics_owned);
  //     setComicsWanted(response.data.comics_wanted);
  //   });
  // };

  const updateUserComics = (userid, config) => {
    fakeapi
      .get(`users/${userid}`, config)
      .then((response) => {
        console.log(response);
        setComicsOwned(response.data.comics_owned);
        setComicsWanted(response.data.comics_wanted);
      })
      .catch((e) => console.log(e));
  };

  const addOwned = (userid, config) => {
    const data = specificComic;
    fakeapi
      .patch(
        `users/${userid}`,
        { comics_owned: [...comicsOwned, data] },
        config
      )
      .then((e) => {
        console.log(data);
        setComicsOwned([...comicsOwned, data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addWanted = (userid, config) => {
    const data = specificComic;
    fakeapi
      .patch(
        `users/${userid}`,
        { comics_wanted: [...comicsWanted, data] },
        config
      )
      .then((e) => {
        console.log(data);
        setComicsWanted([...comicsWanted, data]);
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
      url: `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json`,
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        setSpecificComic(response.data.results);
      })
      .catch((e) => console.log(e));
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
        getComicsList,
        searchComics,
        comicsList,
        setId,
        id,
        getComic,
        specificComic,
        updateUserComics,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => useContext(ComicsContext);
