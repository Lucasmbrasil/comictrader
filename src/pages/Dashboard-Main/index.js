import { useEffect, useState } from "react";
import comic from "../../services/comic";
import { Card, Container } from "./styled";

// import { Container } from './styles';
function DashboardMain() {
  const [hqs, setHqs] = useState([]);

  useEffect(() => {
    comic
      .get(
        "/issues/?api_key=bf2d39824c84c5c81e7f1adcabea036406aff8e9&format=json"
      )
      .then((response) => setHqs(response.data.results))
      .catch((e) => console.log(e));
  }, []);

  console.log(hqs);
  return (
    <Container>
      {hqs.map((item) => (
        <Card key={item.id}>
          <div>{item.volume.name}</div>
          <img src={item.image.thumb_url} alt={item} />
        </Card>
      ))}
    </Container>
  );
}
export default DashboardMain;
