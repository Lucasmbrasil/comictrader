import { useEffect, useState } from "react";
import { useComics } from "../../providers/comics";
import { useUser } from "../../providers/user";

import { DashboardBackground } from "../../styles/globalComponents";
import HQCard from "../../components/HQCards";
import Header from "../../components/Header";
import { ComicListContainer, ComicSearchBar } from "./styles";
import Footer from "../../components/Footer";

function DashboardMain() {
  const [input, setInput] = useState("");
  const { comicsList, searchComics, getComicsList } = useComics();

  const { updateUserComics, getUsersList } = useUser();
  useEffect(() => {
    getComicsList();
    updateUserComics();
    getUsersList();
  }, []);

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
