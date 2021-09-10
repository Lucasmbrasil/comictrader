import React, { useEffect, useState } from "react";
import { useComics } from "../../providers/comics";
import comic from "../../services/comic";
import { Card } from "../Dashboard-Main/styled";

// import { Container } from './styles';
function DashboardComic() {
  const { id, specificComic, getComic } = useComics();

  useEffect(() => {
    getComic(id);
  }, []);

  return (
    <div>
      {specificComic.aliases !== undefined && (
        <>
          <p>{specificComic.volume.name}</p>
          <img
            src={specificComic.image.thumb_url}
            alt={specificComic.volume.name}
          />
        </>
      )}
    </div>
  );
}

export default DashboardComic;
