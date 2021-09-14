import React, { useEffect } from "react";
import {
  Image,
  ImageContainer,
  ComicBackground,
  DashboardComicContainer,
  ComicMainContainer,
  InfoContainer,
} from "./styles";
import { useState } from "react";
import { useComics } from "../../providers/comics";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DashboardBackground,
  DashboardContainer,
} from "../../styles/globalComponents";

function DashboardComic() {
  const [comicObject, setComicImage] = useState([]);
  const { getComic, specificComic, addWanted, addOwned } = useComics();
  const token = localStorage.getItem("@comictrader:token");
  const userId = localStorage.getItem("@comictrader:id");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [ownerList, setOwnerList] = useState([]);
  const [wanterList, setWanterList] = useState([]);

  // const updatingOwners = () => {
  //   fakeapi
  //     .get(`users`, config)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUserList(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    const id = localStorage.getItem("@comictrader:comicId");
    console.log(id);
    getComic(id);
  }, []);

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
              <div></div>
            </div>
            <div className="WhoWants">
              <h3>Quem também quer:</h3>
              <div></div>
            </div>
          </InfoContainer>
        </DashboardComicContainer>
      )}
      <Footer />
    </DashboardBackground>
  );
}

export default DashboardComic;
