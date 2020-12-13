import React, { useState } from "react";
import PropTypes from 'prop-types'
const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Agregue una categoria");

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categorias) => [inputValue,...categorias]);// de esta forma generariamos infinitos gifts
      //setCategories([inputValue])
      setInputValue('')
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={changeValue} />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}

export default AddCategory;
