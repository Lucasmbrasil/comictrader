import { useEffect, useState } from "react";
import comic from "../../services/comic";
import { Card, Container } from "./styled";

// import { Container } from './styles';
function DashboardMain() {
  const [hqs, setHqs] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    comic
      .get(
        "/issues/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json"
      )
      .then((response) => setHqs(response.data.results))
      .catch((e) => console.log(e));
  }, []);
  const handleSearch = () => {
    comic
      .get(
        `search/?api_key=e0240c902e8c43c50db1c50099fe9aa9c328103c&format=json&sort=name:asc&resources=issue&query=${input}`
      )
      .then((response) => setHqs(response.data.results))
      .catch((e) => console.log(e));
  };

  console.log(hqs);
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
            <div>{item.volume.name}</div>
            <img src={item.image.thumb_url} alt={item} />
          </Card>
        ))}
      </Container>
    </>
  );
}
export default DashboardMain;
