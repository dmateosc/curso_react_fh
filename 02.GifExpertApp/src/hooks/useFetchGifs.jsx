import { useState, useEffect } from "react";

import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    // esto es como para poner un estado de la carga con lo que queremos devolver
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //con el useEffect lo que se consigue es que lo que hay dentro solo se consiga en el primer renderizado, p.e: se crea un nuevo elemento GifGrid
  useEffect(() => {
    getGifts(category).then((imgs) =>
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 200)
    );
  }, [category]);

  return state;
};
