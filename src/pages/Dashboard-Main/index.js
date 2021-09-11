import { useEffect, useState } from "react";
import comic from "../../services/comic";
import { useHistory } from "react-router-dom";
import { useComics } from "../../providers/comics";
import { DashboardContainer } from "../../styles/globalComponents";
import HQCard from "../../components/HQCards";
import Header from "../../components/Header"
// import { Container } from './styles';
function DashboardMain() {
  const [input, setInput] = useState("");
  const { comicsList, searchComics, getComicsList, setId } = useComics();

  const history = useHistory();
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
    <DashboardContainer>
      <Header/>
      <input
        placeholder="Pesquise uma hq"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => searchComics(input)}>Pesquisar</button>
      {comicsList.length === 0 && <p>Hq não encontrada</p>}
      <div>
        
        {comicsList.map((item) => (
          <HQCard
            comic={item}
            key={item.id}
            onClick={() => {
              setId(item.id);
              history.push("/comic");
            }}
          />
        ))}
      </div>
    </DashboardContainer>
  );
}
export default DashboardMain;
