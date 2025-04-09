import React from "react";
import Boxes from "./Boxes";
import "../styles/Section.css";

function Section() {
  return (
    <>
      <div className="section">
        <div className="sectionTitle">DSA Sheet</div>
        <div className="sectionBoxes">
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
        </div>
      </div>
    </>
  );
}

export default Section;
