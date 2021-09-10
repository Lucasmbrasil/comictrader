import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useComics } from "../../providers/comics";

function DashboardComic() {
  const { specificComic, getComic, id } = useComics();
  const history = useHistory();
  useEffect(() => {
    getComic(id);
  }, [getComic, id]);

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
