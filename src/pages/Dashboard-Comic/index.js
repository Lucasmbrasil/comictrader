import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useComics } from "../../providers/comics";

function DashboardComic() {

  const { specificComic, getComic, id } = useComics();
  const { comicId } = useParams();

  useEffect(()=> {
    getComic(id)
    console.log()
  }, [getComic, id])
  
  const history = useHistory();

  return (
    <div>
      {specificComic.aliases !== undefined && (
        <>
          <p>{specificComic.volume.name}</p>
          <img
            src={specificComic.image.thumb_url}
            alt={specificComic.volume.name}
          />
          <p>
            {specificComic !== undefined &&
              specificComic.description
                .slice(0, specificComic.description.indexOf("<h4>"))
                .replace(/<.*?>/g, " ")}
          </p>
        </>
      )}
      <button onClick={() => history.push("/main")}>voltar</button>
    </div>
  );
}

export default DashboardComic;
