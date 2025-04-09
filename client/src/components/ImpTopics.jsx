import React from "react";
import "../styles/ImpTopics.css";
import { Link } from "react-router-dom";

function ImpTopics({ dsaData, handleChangeQuestions }) {
  const dsaTopics = dsaData.data[0].topics.map((topic) => {
    return {
      _id: topic._id,
      topic: topic.topic,
      link: topic.link,
    };
  });
  console.log("topics", dsaTopics);

  return (
    <>
      <div className="impTopicsBox">
        {dsaTopics.map((topic) => {
          return (
            <a
              key={topic._id}
              onClick={() => handleChangeQuestions(topic.topic)}
            >
              <div key={topic._id} className="topicTitle">
                {topic.topic}
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default ImpTopics;
