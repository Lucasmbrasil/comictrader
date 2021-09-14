import { useState } from "react";
import { useUser } from "../../providers/user";
import fakeapi from "../../services/fakeapi";
import { PanelContainer } from "../../styles/globalComponents";

const SectionUserRates = () => {
  const { rating } = useUser();
  const [commenter, setCommenter] = useState("")

  const getCommenterInfo = (id) => {
    fakeapi
    .get(`/users/${id}`)
    .then((response) => setCommenter(response.data.name))
  }

  return (
    <PanelContainer>
      {rating?.map((rate, index) => {
        return (
          <div onLoadStart={() => getCommenterInfo(rate.user_id)}>
            <p>{rate.comment}</p>
            <h6>{commenter}</h6>{" "}
          </div>
        );
      })}
    </PanelContainer>
  );
};

export default SectionUserRates;
