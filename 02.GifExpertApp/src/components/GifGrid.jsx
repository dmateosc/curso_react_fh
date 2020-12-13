import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {
  /*   const [images, setImages] = useState([]);

  //con el useEffect lo que se consigue es que lo que hay dentro solo se consiga en el primer renderizado, p.e: se crea un nuevo elemento GifGrid
  useEffect(() => {
    getGifts(category).then(setImages)
    
  }, [category]); */

  const state = useFetchGifs(category);
  const { data, loading } = state;
  //getGifts()

  return (
    <>
      <h3>{category}</h3>
      {loading && 
        <p className="animate__animated animate__flash">"Cargando..."</p>}


        <div className="card-grid">
          {data.map(( img ) => (
            <GridItem key={img.id} {...img} />
          ))}
        </div>
      
    </>
  );
};

export default GifGrid;
