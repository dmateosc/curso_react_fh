import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [values, setValues] = useState(value)

    const handleAdd = () => {
        setValues(values => values + 1)
    }
    const handleReset = () => {
        setValues(value)
    }
    const handleSubtract = () => {
        setValues(values => values - 1)
    }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{values}</h2>

      <button
        onClick={handleAdd}>
        +1
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
