import React, { useEffect, useState } from "react";
import {
  ComicBackground,
  DashboardComicContainer,
  InfoContainer,
} from "./styles";
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

  const [userList, setUserList] = useState([]);
  const [wanterList, setWanterList] = useState();
  const [ownerList, setOwnerList] = useState();

  const getUserList = () => {
    const token = localStorage.getItem("@comictrader:token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    fakeapi.get("users", config).then((res) => {
      setUserList(res.data);
    });
  };

  useEffect(() => {
    const comicID = localStorage.getItem("@comictrader:comicID");
    getComic(comicID);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    if (userList.length > 0)
      setWanterList(
        userList.filter((user) => {
          for (let i = 0; i < user.comics_wanted.length; i++) {
            if (user.comics_wanted[i].id === specificComic.id) {
              return true;
            }
          }
          return false;
        })
      );
  }, [userList]);

  useEffect(() => {
    if (userList.length > 0)
      setOwnerList(
        userList.filter((user) => {
          for (let i = 0; i < user.comics_owned.length; i++) {
            if (user.comics_owned[i].id === specificComic.id) {
              return true;
            }
          }
          return false;
        })
      );
  }, [userList]);

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
