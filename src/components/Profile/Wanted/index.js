import React from "react";
import { useComics } from "../../../providers/comics";

// import { Container } from './styles';

function Wanted() {
  const { comicsWanted } = useComics();

  return (
    <>
      <div>
        <p>map das wanted</p>
        {/* {rating.map((ratings) => (
        <span>{ratings}</span>
      ))} */}
        <p>imagem das wanted</p>
      </div>
    </>
  );
}

export default Wanted;
