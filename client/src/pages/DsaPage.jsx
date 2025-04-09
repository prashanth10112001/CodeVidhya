import React, { useState, useEffect } from "react";
import { getDsaData } from "../api/api";
import ImpTopics from "../components/ImpTopics";
import "../styles/DsaPage.css";
import { Link } from "react-router-dom";

function DsaPage() {
  const [dsaData, setDsaData] = useState([]);
  const [dsaTopics, setDsaTopics] = useState([]);
  const [dsaQuestions, setDsaQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDsaData = async () => {
      try {
        const dsaResponse = await getDsaData();

        setDsaData(dsaResponse);

        const dsaTopics = await dsaResponse.data[0].topics.map((topic) => {
          return topic.topic;
        });

        setDsaTopics(dsaTopics);

        const dsaQuestions = await dsaResponse.data[0].topics[0];

        setDsaQuestions(dsaQuestions);

        console.log("dsaResponse", dsaResponse);
        console.log("dsaTopics1", dsaTopics);
        console.log("dsaquestions", dsaQuestions);

        setLoading(false);
      } catch (error) {
        setError("Error : Failed to fetch the data ");
      }
    };
    fetchDsaData();
  }, []);

  if (loading) {
    return <div>{`loading : ${loading}`}</div>;
  }

  if (error) {
    return <div>{`Error : ${error}`}</div>;
  }

  const handleChangeQuestions = (topic) => {
    console.log("Topic you", topic);

    console.log(
      dsaData.data[0].topics.filter((t) => {
        return t.topic === topic ? t._id : 0;
      })
    );

    const selectedTopic = dsaData.data[0].topics.filter((t) => {
      return t.topic === topic ? t._id : 0;
    });
    console.log("selected topic", selectedTopic[0]);

    setDsaQuestions(selectedTopic[0]);
  };

  console.log("then ", dsaQuestions);

  return (
    <>
      <div className="dsaPage">
        <div className="dsaImpTopics">
          <ImpTopics
            dsaData={dsaData}
            handleChangeQuestions={handleChangeQuestions}
          />
        </div>
        <div className="dsaTopQuestions">
          <div className="dsaTopics">
            <div className="dsaHeader">Topics</div>
            {dsaTopics.map((topic) => {
              return (
                <Link key={topic} onClick={() => handleChangeQuestions(topic)}>
                  <div className="dsaTopicTitle">{topic}</div>
                </Link>
              );
            })}
          </div>
          <div className="dsaQuestions">
            <div className="dsaHeader">Questions</div>
            {dsaQuestions?.questions?.map((question, index) => {
              return (
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="dsaTopicTitle">{question.question}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DsaPage;
