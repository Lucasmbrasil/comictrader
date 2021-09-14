import { useComics } from "../../providers/comics";
import { PanelContainer } from "../../styles/globalComponents";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted } = useComics();

  return (
    <PanelContainer>
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
    </PanelContainer>
  );
};

export default SectionUserCollection;
