import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useComics } from "../../providers/comics";
import { DashboardBackground } from "../../styles/globalComponents";
import HQCard from "../../components/HQCards";
import Header from "../../components/Header";
import { ComicListContainer, ComicSearchBar } from "./styles";
import Footer from "../../components/Footer";

function DashboardMain() {
  const [input, setInput] = useState("");
  const { comicsList, searchComics, getComicsList } = useComics();

  useEffect(() => {
    getComicsList();
  }, []);

  // &resources=character&query=${input}
  // api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json

  // `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json`
  // const handleHq = (id) => {
  //   comic
  //     .get(
  //       `issue/4000-${id}/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json`
  //     )
  //     .then((response) => {
  //       console.log(response.data.results);
  //       console.log(hqs);
  //     })
  //     .catch((e) => console.log(e));
  // };
  // console.log(typeof hqs);
  // console.log(hqs);
  return (
    <DashboardBackground>
      <Header />
      <ComicSearchBar>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Pesquisar..."
        />
        <button onClick={() => searchComics(input)}>Encontrar HQs</button>
      </ComicSearchBar>
      <ComicListContainer>
        {comicsList.map((item) => (
          <HQCard comic={item} key={item.id} comicID={item.id} />
        ))}
      </ComicListContainer>
      <Footer />
    </DashboardBackground>
  );
}
export default DashboardMain;
