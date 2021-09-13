import { useComics } from "../../providers/comics";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted } = useComics();

  return (
    <div>
      <div>
        <div>
          <h2>Quadrinhos que tenho</h2>
          {comicsOwned?.map((comicOwned, index) => (
            <HQCard comic={comicOwned} />
          ))}
        </div>
        <div>
          <h2>Quadrinhos que quero</h2>
          {comicsWanted?.map((comicWanted, index) => (
            <HQCard comic={comicWanted} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionUserCollection;
