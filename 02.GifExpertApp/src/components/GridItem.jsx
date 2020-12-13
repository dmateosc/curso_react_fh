import React from "react";

const GridItem = ({ id, url, title }) => {
  return (
    <div className="card animate__animated animate__bounceIn">
      
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GridItem;
