import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

function Cards({ _id, name, img }) {
  return (
    <>
      <Link to={`/dsa/`}>
        <div className="card">
          <div className="cardImage">
            <img src={img} alt="image" />
          </div>
          <div className="cardTitle">
            <h4>{name}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cards;
