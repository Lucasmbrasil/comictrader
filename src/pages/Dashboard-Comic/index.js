import React, { useEffect } from "react";

import comic from "../../services/comic";
import axios from "axios";
import {
  FatherContainer,
  Image,
  PageContent,
  ImageContainer,
  ContentContainer,
  TextContainer,
  TopBar,
  WebSiteName,
  SearchDiv,
  SearchInput,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useComics } from "../../providers/comics";
import Header from "../../components/Header";

function DashboardComic() {
  const [comicObject, setComicImage] = useState([]);
  // const [description, setDescrition] = useState();
  // const [image, setImage] = useState();
  const { getComic, id, specificComic, addWanted, addOwned } = useComics();

  const token = localStorage.getItem("@comictrader:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const userId = localStorage.getItem("@comictrader:id");

  useEffect(() => {
    getComic(id);
  }, [id]);

  return (
    <>
      <FatherContainer>
        <TopBar>
          <Header />
        </TopBar>
        <PageContent>
          <ContentContainer>
            {specificComic.aliases !== undefined && (
              <>
                <TextContainer>
                  <h1> {specificComic.volume.name}</h1>
                  <p>
                    {specificComic.description !== null &&
                      (specificComic.description.includes("<h4>")
                        ? specificComic.description
                            .slice(0, specificComic.description.indexOf("<h4>"))
                            .replace(/<.*?>/g, " ")
                        : specificComic.description.replace(/<.*?>/g, " "))}
                  </p>
                  <div>
                    <button onClick={() => addWanted(userId, config)}>
                      Eu quero
                    </button>
                    <button onClick={() => addOwned(userId, config)}>
                      Eu tenho
                    </button>
                  </div>
                </TextContainer>
                <ImageContainer>
                  <Image src={specificComic.image.small_url} alt="" />
                </ImageContainer>
              </>
            )}
          </ContentContainer>
        </PageContent>
      </FatherContainer>
    </>
  );
}

export default DashboardComic;
