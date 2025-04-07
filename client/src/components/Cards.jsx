import React from "react";
import "../styles/Cards.css";

function Cards({ name, img }) {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src={img} alt="image" />
        </div>
        <div className="cardTitle">
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
}

export default Cards;
