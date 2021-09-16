import React, { useEffect, useState } from "react";
import {
  ComicBackground,
  ComicBlackTop,
  ComicButtons,
  DashboardComicContainer,
  InfoContainer,
} from "./styles";
import { useComics } from "../../providers/comics";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DashboardBackground } from "../../styles/globalComponents";
import UserCardList from "../../components/UserCardList";
import fakeapi from "../../services/fakeapi";
import { useHistory } from "react-router";

function DashboardComic() {
  
  const { getComic, specificComic, addWanted, addOwned } = useComics();
  const token = localStorage.getItem("@comictrader:token");
  const userId = localStorage.getItem("@comictrader:userID");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [userList, setUserList] = useState();
  const history = useHistory();

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
  const [wanterList, setWanterList] = useState();
  const [ownerList, setOwnerList] = useState();

  const usersList = JSON.parse(
    localStorage.getItem("@comictrader:usersList") || "[]"
  );
  useEffect(() => {
    if (usersList.length > 0)
      setWanterList(
        usersList.filter((user) => {
          if (user.comics_wanted !== undefined) {
            for (let i = 0; i < user.comics_wanted.length; i++) {
              if (user.comics_wanted[i].id === specificComic.id) {
                return true;
              }
            }
          }
          return false;
        })
      );
  }, [specificComic]);

  useEffect(() => {
    if (usersList.length > 0)
      setOwnerList(
        usersList.filter((user) => {
          if (user.comics_owned !== undefined) {
            for (let i = 0; i < user.comics_owned.length; i++) {
              if (user.comics_owned[i].id === specificComic.id) {
                return true;
              }
            }
          }
          return false;
        })
      );
  }, [specificComic]);

  return (
    <DashboardBackground>
      <Header />
      {specificComic.aliases !== undefined && (
        <DashboardComicContainer>
          <ComicBackground image={specificComic.image.small_url}>
            <ComicBlackTop>
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
              <ComicButtons>
                <button onClick={() => {addWanted(userId, config)
                history.push(`/profile/${userId}`)}}>
                  Eu quero
                </button>
                <button onClick={() => {addOwned(userId, config)
                history.push(`/profile/${userId}`)}}>
                  Eu tenho
                </button>
              </ComicButtons>
            </ComicBlackTop>
          </ComicBackground>
          <InfoContainer>
            <div className="WhoHas">
              <h3>Quem tem esta HQ:</h3>
              <div>
                {ownerList?.map((user) => (
                  <UserCardList user={user} />
                ))}
              </div>
            </div>
            <div className="WhoWants">
              <h3>Quem também quer:</h3>
              <div>
                {wanterList?.map((user) => (
                  <UserCardList user={user} />
                ))}
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
