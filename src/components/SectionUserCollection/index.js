import { useEffect } from "react";
import { useComics } from "../../providers/comics";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted, updateUserComics } = useComics();
  const token = localStorage.getItem("@comictrader:token");

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const id = localStorage.getItem("@comictrader:id");
    if (id && id !== 0) {
      updateUserComics(id, config);
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <h2>Quadrinhos que tenho</h2>
          {comicsOwned?.map((comicOwned, index) => (
            <HQCard comic={comicOwned} id={comicOwned.id} />
          ))}
        </div>
        <div>
          <h2>Quadrinhos que quero</h2>
          {comicsWanted?.map((comicWanted, index) => (
            <HQCard comic={comicWanted} id={comicWanted.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionUserCollection;
