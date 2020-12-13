import React from "react";
import PropTypes from "prop-types";


const PrimeraApp = ({ nombre = "Perico" }) => {
  const saludo = "Hola Mundo const";
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera App de {nombre}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
