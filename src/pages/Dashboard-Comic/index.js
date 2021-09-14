import React, { useEffect, useState } from "react";
import {
  // Image,
  // ImageContainer,
  ComicBackground,
  DashboardComicContainer,
  // ComicMainContainer,
  InfoContainer,
} from "./styles";
import { useComics } from "../../providers/comics";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DashboardBackground } from "../../styles/globalComponents";
import UserCardList from "../../components/UserCardList";
import fakeapi from "../../services/fakeapi";

function DashboardComic() {
  // const [comicObject, setComicImage] = useState([]);
  // const [description, setDescrition] = useState();
  // const [image, setImage] = useState();
  const { getComic, specificComic, addWanted, addOwned } = useComics();

  const token = localStorage.getItem("@comictrader:token");
  const userId = localStorage.getItem("@comictrader:userID");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [ownersList, setOwnersList] = useState();
  const [wantersList, setWantersList] = useState();
  const [userList, setUserList] = useState();

  useEffect(() => {
    const comicID = localStorage.getItem("@comictrader:comicID");
    getComic(comicID);
  }, []);

  // const updatingOwners = () => {
  //   fakeapi
  //     .get(`users`, config)
  //     .then((res) => {
  //       console.log(res.data);
  //       // setOwnerList(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const getUserList = () => {
    const token = localStorage.getItem("@comictrader:token");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    fakeapi.get("users", config).then((res) => {
      console.log("requisição", res.data);
      setUserList(res.data);
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  console.log("pq", userList);
  console.log("especific", specificComic.id);

  const wanterList = userList?.map(
    (user) => {
      if (
        user.comics_wanted.filter((comic) => comic.id === specificComic.id) !==
        undefined
      ) {
        return user;
      }
    }

    // user.comics_wanted.filter((comic) => comic.id === specificComic.id)
  );

  const ownerList = userList?.filter((user) =>
    user.comics_owned.filter((comic) => comic.id === specificComic.id)
  );
  console.log("wanter", wanterList);
  console.log("owner", ownerList);

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
