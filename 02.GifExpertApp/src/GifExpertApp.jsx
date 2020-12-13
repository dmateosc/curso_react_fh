import React, {useState} from "react";
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["Dragon Ball"])


  
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      <ul>
        {categories.map((category) => (
            //Importante, si al key le metemos un id nuevo del tipo index, recargara los dos elementos al ver dos cambios
            //pero al pasarle el antiguo key, no volvera a recargar esos cambios 
          //<li key={category} >{category}</li>
          <GifGrid key={category} category={category}/>
        ))}
      </ul>
      
      
    </>
  );
};

export default GifExpertApp;
