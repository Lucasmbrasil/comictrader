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
  const { getComic, id, specificComic } = useComics();

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
                      specificComic.description
                        .slice(0, specificComic.description.indexOf("<h4>"))
                        .replace(/<.*?>/g, " ")}
                  </p>
                  <div>
                    <button>Eu quero</button>
                    <button>Eu tenho</button>
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
