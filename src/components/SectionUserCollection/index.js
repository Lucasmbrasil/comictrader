import { useEffect } from "react";
import { useComics } from "../../providers/comics";
import HQCard from "../HQCards";

const SectionUserCollection = () => {
  const { comicsOwned, comicsWanted, updateOwned } = useComics();

  useEffect(() => {
    const id = localStorage.getItem("@comictrader:id");
    updateOwned(id);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h2>Quadrinhos que tenho</h2>
          {comicsOwned?.map((comicOwned, index) => (
            <HQCard comic={comicOwned} id="qualquer porra" />
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
