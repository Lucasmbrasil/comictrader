import { useUser } from "../../providers/user";
import { PanelContainer } from "../../styles/globalComponents";

const SectionUserTrades = () => {
  const { trades } = useUser();

  return (
    <PanelContainer>
      {trades?.map((trade, index) => {
        return (
          <div>
            <div>
              <img src={trade.comic_image} alt={trade.comic_name} />
            </div>
            <div>
              <h3>{trade.comic_name}</h3>
              <h5>Trocando com: {trade.trading_with}</h5>
              <h5>Status: {trade.status}</h5>
            </div>
          </div>
        );
      })}
    </PanelContainer>
  );
};

export default SectionUserTrades;
