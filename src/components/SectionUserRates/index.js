import { useUser } from "../../providers/user";

const SectionUserRates = () => {
  const { rating } = useUser();

  return (
    <div>
      {rating?.map((rate, index) => {
        return (
          <div>
            <p>{rate.comment}</p>
            <h6>{rate.user_id}</h6>{" "}
            {/*pegar infos de quem comentou por esse id */}
          </div>
        );
      })}
    </div>
  );
};

export default SectionUserRates;
