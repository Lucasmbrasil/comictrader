import React, { useEffect, useState } from "react";
import { useComics } from "../../providers/comics";
import comic from "../../services/comic";
import { Card } from "../Dashboard-Main/styled";

// import { Container } from './styles';
function DashboardComic() {
  const { id, specificComic, getComic } = useComics();
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    getComic(id);
  }, []);

  // if (specificComic.aliases !== undefined) {
  //   setDescricao(specificComic.description);
  // }

  return (
    <div>
      {specificComic.aliases !== undefined && (
        <>
          <p>{specificComic.volume.name}</p>
          <img
            src={specificComic.image.thumb_url}
            alt={specificComic.volume.name}
          />
          <p>{specificComic.description.replace(/<.*?>/g, "")}</p>
        </>
      )}
    </div>
  );
}

export default DashboardComic;
