import { useUser } from "../../providers/user";
import { PanelContainer } from "../../styles/globalComponents";
import RatingsCard from "../RatingsCard";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import fakeapi from "../../services/fakeapi";
import { StyledCircularProgress } from "../../pages/Dashboard-Main/styles";

const SectionUserRates = () => {
  const { rating } = useUser();
  const params = useParams();
  const userID = localStorage.getItem("@comictrader:userID");
  const token = localStorage.getItem("@comictrader:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [profileRating, setProfileRating] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const profileID = localStorage.getItem("@comictrader:profileID") || "[]";
    fakeapi
      .get(`users/${profileID}`, config)
      .then((res) => {
        setLoading(false);
        setProfileRating(res.data.rating);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  console.log(loading);

  return params.userId === userID ? (
    <PanelContainer>
      {loading ? (
        <StyledCircularProgress />
      ) : (
        rating?.map((rate, index) => <RatingsCard rate={rate} key={index} />)
      )}
    </PanelContainer>
  ) : (
    <PanelContainer>
      {loading ? (
        <StyledCircularProgress />
      ) : (
        profileRating?.map((rate, index) => (
          <RatingsCard rate={rate} key={index} />
        ))
      )}
    </PanelContainer>
  );
};

export default SectionUserRates;
