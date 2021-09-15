import { useUser } from "../../providers/user";
import { PanelContainer } from "../../styles/globalComponents";
import RatingsCard from "../RatingsCard";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import fakeapi from "../../services/fakeapi";

const SectionUserRates = () => {
  const { rating } = useUser();
  const params = useParams();
  const userID = localStorage.getItem("@comictrader:userID");
  const token = localStorage.getItem("@comictrader:token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [profileRating, setProfileRating] = useState();

  useEffect(() => {
    const profileID = localStorage.getItem("@comictrader:profileID") || "[]";

    fakeapi.get(`users/${profileID}`, config).then((res) => {
      setProfileRating(res.data.rating);
    });
  }, []);

  return params.userId === userID ? (
    <PanelContainer>
      {rating?.map((rate, index) => (
        <RatingsCard rate={rate} key={index} />
      ))}
    </PanelContainer>
  ) : (
    <PanelContainer>
      {profileRating?.map((rate, index) => (
        <RatingsCard rate={rate} key={index} />
      ))}
    </PanelContainer>
  );
};

export default SectionUserRates;
