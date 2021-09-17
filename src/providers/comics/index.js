import { createContext, useContext, useEffect, useState } from "react";
import comic from "../../services/comic";
import fakeapi from "../../services/fakeapi";

export const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {

  const [comicsList, setComicsList] = useState([]);
  const [specificComic, setSpecificComic] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const addOwned = (userid, config) => {
    const comicsOwned = JSON.parse(
      localStorage.getItem("@comictrader:ownedList") || "[]"
    );
    const data = specificComic;
    fakeapi
      .patch(
        `users/${userid}`,
        { comics_owned: [...comicsOwned, data] },
        config
      )
      .then((e) => {
        localStorage.setItem(
          "@comictrader:ownedList",
          JSON.stringify([...comicsOwned, data] || [])
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addWanted = (userid, config) => {
    const comicsWanted = JSON.parse(
      localStorage.getItem("@comictrader:wantedList") || "[]"
    );
    const data = specificComic;
    fakeapi
      .patch(
        `users/${userid}`,
        { comics_wanted: [...comicsWanted, data] },
        config
      )
      .then((e) => {
        localStorage.setItem(
          "@comictrader:wantedList",
          JSON.stringify([...comicsWanted, data] || [])
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getComicsList = () => {
    setLoading(true);
    const url = {
      url: "http://comicvine.gamespot.com/api/issues/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json&sort=cover_date:desc",
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        setComicsList(response.data.results);
        setLoading(false);
      })

      .catch((e) => {
        setLoading(false);
      });
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
    setLoading(true);

    const url = {
      url: `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json`,
    };
    comic
      .post("get-data/", url)
      .then((response) => {
        setSpecificComic(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <ComicsContext.Provider
      value={{
        addOwned,
        addWanted,
        getComicsList,
        searchComics,
        comicsList,
        loading,
        getComic,
        specificComic,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export const useComics = () => useContext(ComicsContext);
