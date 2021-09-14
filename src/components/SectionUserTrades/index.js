import { useUser } from "../../providers/user";

const SectionUserTrades = () => {
  const { trades } = useUser();

  return (
    <div>
      {trades?.map((trade) => {
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
    </div>
  );
};

export default SectionUserTrades;
