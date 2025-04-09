import React from "react";
import { Link } from "react-router-dom";

import "../styles/Boxes.css";

function Boxes() {
  return (
    <>
      <div className="box">
        <Link to={`/dsa`}>
          <div className="boxImg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png"
              alt="dsaImg"
            />
          </div>
          <div className="boxTitle">DSA Sheet</div>
        </Link>
      </div>
    </>
  );
}

export default Boxes;
