import { useEffect, useState } from "react";
import fakeapi from "../../services/fakeapi";
import { RatingsCardContainer } from "./styles";

const RatingsCard = ({ rate }) => {
  const [commenter, setCommenter] = useState();

  const getCommenterInfo = (id) => {
    const token = localStorage.getItem("@comictrader:token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    fakeapi
      .get(`/users/${id}`, config)
      .then((response) => setCommenter(response.data));
  };

  useEffect(() => {
    if (rate.userId) {
      getCommenterInfo(rate.userId);
    }
  }, []);

  return (
    <RatingsCardContainer>
      <div className="commenterInfo">
        <h5>"{rate.comment}"</h5>
        <h6>
          {commenter?.name} - {commenter?.state}, Brasil
        </h6>
      </div>
    </RatingsCardContainer>
  );
};

export default RatingsCard;
