import { useUser } from "../../providers/user";
import { PanelContainer } from "../../styles/globalComponents";

const SectionUserRates = () => {
  const { rating } = useUser();

  return (
    <PanelContainer>
      {rating?.map((rate, index) => {
        return (
          <div>
            <p>{rate.comment}</p>
            <h6>{rate.user_id}</h6>{" "}
            {/*pegar infos de quem comentou por esse id */}
          </div>
        );
      })}
    </PanelContainer>
  );
};

export default SectionUserRates;
