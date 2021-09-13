import { HQCardContainer } from "./styles";
import Rating from "@material-ui/lab/Rating";
import { useComics } from "../../providers/comics";
import { useHistory } from "react-router";

const HQCard = ({ comic, id }) => {
  const value = Math.floor(Math.random() * 5 + 1);
  const formatedDate = comic.cover_date?.replaceAll("-", ".");
  const { getComic, setId } = useComics();
  const history = useHistory();

  return (
    <HQCardContainer
      onClick={() => {
        setId(id);
        history.push(`/comic/${comic.id}`);
      }}
    >
      <div className="hqImageContainer">
        <img src={comic.image.thumb_url} alt={comic.volume.name} />
      </div>
      <div className="hqInfoContainer">
        <div className="hqInfo">
          {comic.volume.name.length > 24 ? (
            <h3>{comic.volume.name.slice(0, 24)}...</h3>
          ) : (
            <h3>{comic.volume.name}</h3>
          )}
          <p>{formatedDate}</p>
        </div>
        <div className="hqRating">
          <Rating name="read-only" value={value} readOnly />
        </div>
      </div>
    </HQCardContainer>
  );
};

export default HQCard;
