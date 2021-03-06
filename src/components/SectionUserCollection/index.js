import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { StyledCircularProgress } from "../../pages/Dashboard-Main/styles";
import { useComics } from "../../providers/comics";
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents";
import HQCard from "../HQCards";
import { ComicListsContainer } from "./styles.js";

const SectionUserCollection = () => {
  const [profileWanted, setProfileWanted] = useState([]);
  const [profileOwned, setProfileOwned] = useState([]);

  const params = useParams();
  const userID = localStorage.getItem("@comictrader:userID");
  const token = localStorage.getItem("@comictrader:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const profileID = localStorage.getItem("@comictrader:profileID") || "[]";
    if (profileID !== "[]") {
      fakeapi.get(`users/${profileID}`, config).then((res) => {
        setProfileOwned(res.data.comics_owned);
        setProfileWanted(res.data.comics_wanted);
        setLoading(false);
      });
    }
  }, []);

  const comicsOwned = JSON.parse(
    localStorage.getItem("@comictrader:ownedList") || "[]"
  );
  const comicsWanted = JSON.parse(
    localStorage.getItem("@comictrader:wantedList") || "[]"
  );

  // useEffect(() => {
  //   // const token = localStorage.getItem("@comictrader:token");
  //   const id = localStorage.getItem("@comictrader:userID");
  //   // const config = { headers: { Authorization: `Bearer ${token}` } };
  //   if (id && id !== 0) {
  //     updateUserComics(id);
  //   }
  // }, []);

  return params.userId === userID ? (
    <PanelContainer>
      <ComicListsContainer>
        <div className="ListContainer">
          <h2>Meus quadrinhos</h2>
          {comicsOwned?.map((comicOwned) => (
            <HQCard
              comic={comicOwned}
              comicID={comicOwned.id}
              key={comicOwned.id}
            />
          ))}
        </div>
        <div className="ListContainer">
          <h2>Quadrinhos que quero</h2>
          {comicsWanted?.map((comicWanted, index) => (
            <HQCard
              comic={comicWanted}
              comicID={comicWanted.id}
              key={comicWanted.id}
            />
          ))}
        </div>
      </ComicListsContainer>
    </PanelContainer>
  ) : (
    <PanelContainer>
      {loading ? (
        <StyledCircularProgress />
      ) : (
        <ComicListsContainer>
          <div className="ListContainer">
            <h2>Lista de quadrinhos</h2>
            {profileOwned?.map((comicOwned) => (
              <HQCard
                comic={comicOwned}
                comicID={comicOwned.id}
                key={comicOwned.id}
              />
            ))}
          </div>
          <div className="ListContainer">
            <h2>Lista de desejos</h2>
            {profileWanted?.map((comicWanted, index) => (
              <HQCard
                comic={comicWanted}
                comicID={comicWanted.id}
                key={comicWanted.id}
              />
            ))}
          </div>
        </ComicListsContainer>
      )}
    </PanelContainer>
  );
};

export default SectionUserCollection;
