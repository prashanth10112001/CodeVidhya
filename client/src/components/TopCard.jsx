import React from "react";
import "../styles/TopCard.css";

function TopCard({ topic }) {
  return (
    <>
      <div className="topCard">{topic}</div>
    </>
  );
}

export default TopCard;
