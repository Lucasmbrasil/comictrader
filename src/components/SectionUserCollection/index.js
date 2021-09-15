import { useEffect } from "react";
import { useComics } from "../../providers/comics";
import { PanelContainer } from "../../styles/globalComponents";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted, updateUserComics } = useComics();
  const token = localStorage.getItem("@comictrader:token");

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const id = localStorage.getItem("@comictrader:userID");
    if (id && id !== 0) {
      updateUserComics(id, config);
    }
  }, []);

  return (
    <PanelContainer>
      <div className="ComicListsContainer">
        <div>
          <h2>Quadrinhos que tenho</h2>
          {comicsOwned?.map((comicOwned) => (
            <HQCard
              comic={comicOwned}
              comicID={comicOwned.id}
              key={comicOwned.id}
            />
          ))}
        </div>
        <div>
          <h2>Quadrinhos que quero</h2>
          {comicsWanted?.map((comicWanted, index) => (
            <HQCard
              comic={comicWanted}
              comicID={comicWanted.id}
              key={comicWanted.id}
            />
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

export default SectionUserCollection;
