import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useComics } from "../../providers/comics";
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const [profileWanted, setProfileWanted] = useState([]);
  const [profileOwned, setProfileOwned] = useState([]);

  const params = useParams();
  const userID = localStorage.getItem("@comictrader:userID");
  const token = localStorage.getItem("@comictrader:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const profileID = localStorage.getItem("@comictrader:profileID") || "[]";

    fakeapi.get(`users/${profileID}`, config).then((res) => {
      setProfileOwned(res.data.comics_owned);
      setProfileWanted(res.data.comics_wanted);
    });
  }, []);

  const comicsOwned = JSON.parse(
    localStorage.getItem("@comictrader:ownedList") || "[]"
  );
  const comicsWanted = JSON.parse(
    localStorage.getItem("@comictrader:wantedList") || "[]"
  );
  console.log(comicsWanted);

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
      <div>
        <div>
          <h2>Quadrinhos que tenho</h2>
          {comicsOwned?.map((comicOwned) => (
            <HQCard
              comic={comicOwned}
              comicID={comicOwned.id}
              key={comicOwned.id}
            />
          ))}
        </div>
        <div>
          <h2>Quadrinhos que quero</h2>
          {comicsWanted?.map((comicWanted, index) => (
            <HQCard
              comic={comicWanted}
              comicID={comicWanted.id}
              key={comicWanted.id}
            />
          ))}
        </div>
      </div>
    </PanelContainer>
  ) : (
    <PanelContainer>
      <div>
        <div>
          <h2>Quadrinhos que tenho</h2>
          {profileOwned?.map((comicOwned) => (
            <HQCard
              comic={comicOwned}
              comicID={comicOwned.id}
              key={comicOwned.id}
            />
          ))}
        </div>
        <div>
          <h2>Quadrinhos que quero</h2>
          {profileWanted?.map((comicWanted, index) => (
            <HQCard
              comic={comicWanted}
              comicID={comicWanted.id}
              key={comicWanted.id}
            />
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

export default SectionUserCollection;
