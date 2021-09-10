import { useEffect, useState } from "react";
import comic from "../../services/comic";
import { Card, Container } from "./styled";
import { useHistory } from "react-router-dom";
// import { Container } from './styles';
function DashboardMain() {
  const [hqs, setHqs] = useState([]);
  const [input, setInput] = useState("");
  const [description, setDescription] = useState([]);
  useEffect(() => {
    comic
      .get(
        "/issues/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json"
      )
      .then((response) => {
        setHqs(response.data.results);
      })
      .catch((e) => console.log(e));
  }, []);
  const handleSearch = () => {
    comic
      .get(
        `search/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json&sort=name:asc&resources=issue&query=${input}`
      )
      .then((response) => setHqs(response.data.results))
      .catch((e) => console.log(e));
  };
  // &resources=character&query=${input}
  // api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json

  // `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json`
  console.log(description);

  return (
    <>
      <input
        placeholder="Pesquise uma hq"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      {hqs.length === 0 && <p>Hq não encontrada</p>}
      <Container>
        {hqs.map((item) => (
          <Card key={item.id}>
            {/* {console.log(item.api_detail_url)} */}
            {setDescription([...description, item.description])}

            <div>{item.volume.name}</div>
            <img src={item.image.thumb_url} alt={item} />
            {`${item.description}`}
          </Card>
        ))}
      </Container>
    </>
  );
}
export default DashboardMain;
