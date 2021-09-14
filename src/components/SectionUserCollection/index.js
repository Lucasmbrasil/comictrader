import { useEffect } from "react";
import { useComics } from "../../providers/comics";
import { PanelContainer } from "../../styles/globalComponents";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted, updateUserComics } = useComics();

  useEffect(() => {
    // const token = localStorage.getItem("@comictrader:token");
    const id = localStorage.getItem("@comictrader:userID");
    // const config = { headers: { Authorization: `Bearer ${token}` } };
    if (id && id !== 0) {
      updateUserComics(id);
    }
  }, []);

  return (
    <PanelContainer>
      <div>
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
