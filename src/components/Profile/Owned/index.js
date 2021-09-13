import React from "react";
import { useComics } from "../../../providers/comics";

// import { Container } from './styles';

function Owned() {
  const { comicsOwned } = useComics();
  return (
    <>
      <div>
        <p>map das owned</p>
        {/* {rating.map((ratings) => (
          <span>{ratings}</span>
        ))} */}
        <p>imagem das owned</p>
      </div>
    </>
  );
}

export default Owned;
