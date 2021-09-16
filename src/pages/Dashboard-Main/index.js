import { useEffect, useState } from "react";
import { useComics } from "../../providers/comics";
import { useUser } from "../../providers/user";
import { DashboardBackground } from "../../styles/globalComponents";
import HQCard from "../../components/HQCards";
import Header from "../../components/Header";
import {
  ComicListContainer,
  ComicSearchBar,
  StyledCircularProgress,
} from "./styles";
import Footer from "../../components/Footer";
import CircularProgress from "@mui/material/CircularProgress";

function DashboardMain() {
  const [input, setInput] = useState("");
  const { comicsList, searchComics, getComicsList, loading } = useComics();
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
        {loading ? (
          <StyledCircularProgress />
        ) : (
          comicsList.map((item) => (
            <HQCard comic={item} key={item.id} comicID={item.id} />
          ))
        )}
      </ComicListContainer>
      <Footer />
    </DashboardBackground>
  );
}
export default DashboardMain;
