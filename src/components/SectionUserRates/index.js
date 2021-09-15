import { useUser } from "../../providers/user";
import { PanelContainer } from "../../styles/globalComponents";
import RatingsCard from "../RatingsCard";

const SectionUserRates = () => {
  const { rating } = useUser();

  return (
    <PanelContainer>
      {rating?.map((rate, index) => (
        <RatingsCard rate={rate} />
      ))}
    </PanelContainer>
  );
};

export default SectionUserRates;
