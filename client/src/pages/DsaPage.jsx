import React from "react";
import TopCard from "../components/TopCard";
import "../styles/DsaPage.css";

function DsaPage() {
  const topics = [
    "DataTypes",
    "Binary Trees",
    "Strings",
    "Arrays",
    "Stack",
    "Queue",
    "Heap",
    "Linked List",
  ];

  return (
    <>
      <div className="dsaPage">
        <div className="topCardBox">
          {topics.map((topic) => (
            <TopCard topic={topic} key={topic} />
          ))}
        </div>
        <div className="dsaBox">
          <div className="dsaLeftCard">
            <div className="dsaTopicsTitle">Topics</div>
            <div className="dsaTopics">
              <ul>
                <li>DataTypes</li>
                <li>Binary Trees</li>
                <li>Strings </li>
                <li>Arrays</li>
                <li>Stack</li>
                <li>Queue</li>
                <li>Heap</li>
                <li>Linked List</li>
              </ul>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DsaPage;
