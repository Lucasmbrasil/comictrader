import React, { useEffect, useState } from "react";
import {
  // Image,
  // ImageContainer,
  ComicBackground,
  DashboardComicContainer,
  // ComicMainContainer,
  InfoContainer,
} from "./styles";
// import { useState } from "react";
import { useComics } from "../../providers/comics";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DashboardBackground } from "../../styles/globalComponents";
import UserCardList from "../../components/UserCardList";
import fakeapi from "../../services/fakeapi";

function DashboardComic() {

  const { getComic, specificComic, addWanted, addOwned } = useComics();
  const token = localStorage.getItem("@comictrader:token");
  const userId = localStorage.getItem("@comictrader:userID");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [userList, setUserList] = useState()

  const getUserList = () => {
    fakeapi
    .get("users", config)
    .then((response) => setUserList(response.data))
    .catch((e) => console.log("deu ruim", e))
  }
  console.log(userList);

  useEffect(() => {
    const comicID = localStorage.getItem("@comictrader:comicID");
    getComic(comicID);
    getUserList();
  }, []);

  const wantersList = userList?.filter((user) => user.comics_wanted.includes(specificComic))

  const ownersList = userList?.filter((user) => user.comics_owned.includes(specificComic))

  return (
    <DashboardBackground>
      <Header />
      {specificComic.aliases !== undefined && (
        <DashboardComicContainer>
          <ComicBackground
            style={{
              background: `url(${specificComic.image.small_url}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="ComicBlackTop">
              <img
                src={specificComic.image.thumb_url}
                alt={specificComic.volume.name}
              />
              <h1>{specificComic.volume.name}</h1>
              <p>
                {specificComic.description !== null &&
                  (specificComic.description.includes("<h4>")
                    ? specificComic.description
                        .slice(0, specificComic.description.indexOf("<h4>"))
                        .replace(/<.*?>/g, " ")
                    : specificComic.description.replace(/<.*?>/g, " "))}
              </p>
              <div className="ComicButtons">
                <button onClick={() => addWanted(userId, config)}>
                  Eu quero
                </button>
                <button onClick={() => addOwned(userId, config)}>
                  Eu tenho
                </button>
              </div>
            </div>
          </ComicBackground>
          <InfoContainer>
            <div className="WhoHas">
              <h3>Quem tem esta HQ:</h3>
              <div>
                {ownersList?.map((owner) =>
                <UserCardList user={owner}/>)}
              </div>
            </div>
            <div className="WhoWants">
              <h3>Quem também quer:</h3>
              <div>
              {wantersList?.map((wanter) =>
                <UserCardList user={wanter}/>)}
              </div>
            </div>
          </InfoContainer>
        </DashboardComicContainer>
      )}
      <Footer />
    </DashboardBackground>
  );
}

export default DashboardComic;
