import React, { useEffect } from "react";

import comic from "../../services/comic"
import axios from "axios";
import { FatherContainer,Image,PageContent,ImageContainer,ContentContainer,TextContainer,TopBar ,WebSiteName,SearchDiv,SearchInput} from "./styles";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";

function DashboardComic() {
 const [comicObject,setComicImage]= useState([]);
 const [description,setDescrition] = useState();
 const [image,setImage] = useState();
 
  useEffect(() => {
    comic
      .get(
        "/issues/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json"
      )
      .then((response) => setComicImage([response.data.results[0]]))
      .catch((e) => console.log(e));
  }, []);

useEffect(()=>{

  
  setDescrition(comicObject[0]?.description.replace(/<p>/g,"").replaceAll("</p>",""));
 

  
  
},[comicObject])






  return <>
    <FatherContainer>
      <TopBar>
        <WebSiteName>
          teste
          <p>subtitulo</p>
        </WebSiteName>
            <div>Home</div>
            <div>texto</div>
            <div>texto</div>
            <div>Lançamentos</div>
            <SearchDiv>
              <SearchIcon/><SearchInput/>
            </SearchDiv>
        </TopBar>
        <PageContent>
          <ContentContainer>
            <TextContainer>
              {comicObject?.map((titulo,index)=>(<h1 key={index}>{titulo.name}</h1>))}
                <p>{description}</p>              
              <div>
              <button>Eu quero</button>
              <button>Eu tenho</button>
              </div>
            </TextContainer>
            <ImageContainer>
              <Image src={comicObject[0]?.image?.small_url} alt=""/>
              imagem aqui
            </ImageContainer>
          </ContentContainer>
        </PageContent>
    </FatherContainer>
  </>;
}

export default DashboardComic;